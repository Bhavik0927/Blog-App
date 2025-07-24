import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../CSS/EditBlog.css';


const EditBlog = () => {

    const { id } = useParams();
    // console.log("param-id", id);

    const Navigate = useNavigate();
    const [data, setData] = useState(null);

    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const [blogImage, setBlogImage] = useState('');

    const FetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/blog/${id}`, { withCredentials: true });

            setData(response?.data?.data);

        } catch (error) {
            console.log(error.message);
        }
    }

    

    useEffect(() => {
        FetchBlog();
    }, [id]);

    useEffect(() => {
        if(data){
            setTitle(data.title || '');
            setBlog(data.blog || "");
            setBlogImage(data.blogImage || "");
        }
    },[data])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let imageUrl = blogImage;

        if (blogImage instanceof File) {

            const formData = new FormData();
            formData.append('file', blogImage);
            formData.append('upload_preset', 'Update_image');

            try {
                const res = await axios.post('https://api.cloudinary.com/v1_1/dhx3bmjpg/image/upload', formData)

                imageUrl = res.data.secure_url;
            } catch (error) {
                console.log(error);
                return;
            }
        }

        try {
             await axios.put(`http://localhost:4000/blog/${id}`, {
                title,
                blog,
                blogImage: imageUrl
            }, { withCredentials: true });

            toast.success("blog-data is updated...");

            Navigate('/myprofile');
        } catch (error) {
            console.log(error);
        }

    }


    if(!data){ return <p>Loading...</p> };

    return (
        <div className='Edit-Container'>
            <form onSubmit={handleSubmit} >

                <div id="title_area">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        placeholder="Title for blog"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div id="blog_area">
                    <label htmlFor="textarea">Blog</label>

                    <textarea
                        id="textarea"
                        value={blog}
                        placeholder="Write an blog"
                        onChange={(e) => setBlog(e.target.value)}
                    />
                </div>

                <input
                    type="file"
                    onChange={(e) => {
                        setBlogImage(e.target.files[0]);
                    }}
                    className={{ marginBottom: "10px", color: "#fff" }}
                />


                <div className='close-area'>
                    <button className="close-btn" type='submit' >submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditBlog