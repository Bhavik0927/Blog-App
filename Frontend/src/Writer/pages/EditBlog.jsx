import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "../CSS/EditBlog.css";
import '../../shared/styles/CSS/EditBlog.css';
import { api } from "../../shared/constants/Constant";

const EditBlog = () => {
  const { id } = useParams();

  const Navigate = useNavigate();
  const [data, setData] = useState(null);

  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [blog, setBlog] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [loading, setLoading] = useState(false);

  const FetchBlog = async () => {
    try {
      const response = await api.get(`/blog/${id}` );

      setData(response?.data?.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    FetchBlog();
  }, [id]);

  useEffect(() => {
    if (data) {
      setTitle(data.title || "");
      setBlog(data.blog || "");
      setBlogImage(data.blogImage || "");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let imageUrl = blogImage;

    if (blogImage instanceof File) {
      const formData = new FormData();
      formData.append("file", blogImage);
      formData.append("upload_preset", "Update_image");

      try {
        const res = await api.post(
          import.meta.env.VITE_CLOUDINARY_URL,
          formData
        );

        imageUrl = res.data.secure_url;
      } catch (error) {
        toast.error(error.message);
        return;
      }
    }

    try {
      await api.put(
        `/blog/${id}`,
        {
          title,
          subtitle,
          blog,
          blogImage: imageUrl,
        }
        
      );

      toast.success("blog-data is updated...");

      Navigate("/myprofile");
    } catch (error) {
      toast.error(error.message);
    }finally{
        setLoading(false);
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="Edit-Container">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          placeholder="Title for blog"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Sub-Title</label>
        <input
          id="title"
          type="text"
          value={subtitle}
          placeholder="Title for blog"
          onChange={(e) => setSubTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="textarea">Blog</label>

        <textarea
          id="textarea"
          value={blog}
          placeholder="Write an blog"
          onChange={(e) => setBlog(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="file"
          onChange={(e) => {
            setBlogImage(e.target.files[0]);
          }}
          className={{ marginBottom: "10px", color: "#fff" }}
        />
      </div>

      <div className="form-actions">
        <button className="submit-btn" type="submit">
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default EditBlog;
