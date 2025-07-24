// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { MdDelete } from "react-icons/md";
// import { RiEdit2Fill } from "react-icons/ri";
// import { toast } from "react-toastify";
// import axios from 'axios';
// import './Myblogs.css';



// const Myblogs = ({data}) => {

//     const [deletedId, setDeletedId] = useState(null);
//     // const [data, setData] = useState();

//     const Navigate = useNavigate();

//     // const handleDelete = async (blogId) => {
//     //     try {
//     //         await axios.delete(`http://localhost:4000/${blogId}`, { withCredentials: true });
//     //         setData((prev) => prev.filter((blog) => blog._id !== blogId));
//     //         setDeletedId(null);
//     //         toast.success("deleted successfully...");
//     //     } catch (error) {
//     //         console.log(error);
//     //     }
//     // }

//     return (
//         <div>
//             {data?.length > 0 ? (
//                 data?.map((e, _) => {
//                     return (
//                         <div key={e._id} className="card" >
//                             <div className="edit-header" style={{ display: 'flex', justifyContent: 'space-between' }} >
//                                 <div>
//                                     <img className="blog-image" src={e?.blogImage} alt="" />
//                                     <h2>{e.title}</h2>

//                                     <div style={{ fontSize: '25px', display: 'flex', gap: '10px', cursor: 'pointer' }}>
//                                         <MdDelete onClick={() => setDeletedId(e._id)} />
//                                         <RiEdit2Fill onClick={() => Navigate(`/editBlog/${e._id}`)} />
//                                     </div>
//                                 </div>
//                                 {
//                                     deletedId === e._id && (
//                                         <div className="confirm-overlay">
//                                             <div className="confirm-card">
//                                                 <p>Are you sure you want to delete this blog?</p>
//                                                 <div className="confirm-buttons">
//                                                     {/* <button className="confirm-yes" onClick={() => { handleDelete(e._id) }}>Yes </button> */}
//                                                     <button className="confirm-no" onClick={() => setDeletedId(null)}>
//                                                         No
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )
//                                 }
//                             </div>

//                             <div >
//                                 <p>{e.blog}</p>
//                             </div>

//                             <div className="name_date_box" >
//                                 <h4>{new Date(e.createdAt).toLocaleDateString('en-CA')}</h4>
//                             </div>
//                         </div>
//                     )
//                 })
//             ) : (
//                 <div className="no-blog">
//                     <h1>You don't have any blog...</h1>
//                 </div>
//             )
//             }
//         </div>
//     )
// }

// export default Myblogs




import React from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import '../CSS/Myblogs.css';
import { BsStars } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { useHref } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";

const Myblogs = ({ props }) => {

    const link = useHref();
    const Navigate = useNavigate();
    
    const savedBlog = async () => {
        try {
            const response = await axios.post('http://localhost:4000/saveblog', { blogId: props._id }, { withCredentials: true });
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.message);
        }

    }

    console.log(props._id);

    return (
        <div className="main_card_info">

            <div className="main_content_container">
                <div className="content_block" >
                    <Link to="">
                        <h3 className="title">Today I Learned Something About My Boyfriend That No Girl Should Ever Have to   </h3>
                        <p className="paragraph">For the writer who doesn’t think they have anything to offer  and why you're dead wrong
                        </p>
                    </Link>
                </div>
                <div className="blog_image">
                    <img src={props?.blogImage} alt="" />
                </div>
            </div>

            <div className="date_container">

                <div className="date_heart_block">
                    <p className="date"> <span className="star">
                        <BsStars /></span>
                        {new Date(props?.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        })}

                    </p>
                </div>
                <div className="bookmark" >
                    {link === '/myprofile' ? <CiEdit onClick={() => Navigate(`/editblog/${props._id}`)} />   : <CiBookmarkCheck onClick={() => savedBlog()} />}
                </div>
            </div>
        </div>
    )
}

export default Myblogs;