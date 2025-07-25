
// 
// const [deletedId, setDeletedId] = useState(null);

// const Navigate = useNavigate();



// const handleDelete = async (blogId) => {
//     try {
//         await axios.delete(`http://localhost:4000/${blogId}`, { withCredentials: true });
//         setData((prev) => prev.filter((blog) => blog._id !== blogId));
//         setDeletedId(null);
//         toast.success("deleted successfully...");
//     } catch (error) {
//         console.log(error);
//     }
// }

// 

// return (
//     <div className="card_container">

//         
//         }
//     </div>
// )
// }

// export default MyProfile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import '../CSS/MyProfile.css';
import Myblogs from './Myblogs';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const user = useSelector((store) => store.user?.user);
    console.log(user);

    const [data, setData] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('http://localhost:4000/myblog', { withCredentials: true });
        setData(response?.data);
    }

    const handleDelete = async (blogId) => {
        try {
            await axios.delete(`http://localhost:4000/${blogId}`, { withCredentials: true });
            setData((prev) => prev.filter((blog) => blog._id !== blogId));
            toast.success("deleted successfully...");
        } catch (error) {
            console.log(error);
        }
    }
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => { fetchBlogs() }, []);

    return (
        <div className={`myprofile-container ${showConfirm ? 'blurred' : ''}`}>
            <div className="upper-container">
                <div className="profile-left">
                    <img
                        src={user?.profilePic || user?.existUser?.profilePic}
                        alt="Profile"
                        className="profile-image"
                    />
                    <h2 className="profile-name">
                        {user?.firstname || user?.existUser?.firstname} {user?.lastname || user?.existUser?.lastname}
                    </h2>
                </div>


                <div className="profile-right">
                    <div className="profile-stat">
                        <span className="stat-number">
                            {user?.followers?.length ?? user?.existUser?.followers?.length ?? 0}
                        </span>
                        <span className="stat-label">Followers</span>
                    </div>
                    <div className="profile-stat">
                        <span className="stat-number">
                            {user?.following?.length ?? user?.existUser?.following?.length ?? 0}
                        </span>
                        <span className="stat-label">Following</span>
                    </div>
                    <div className="profile-stat">
                        <span className="stat-number">{data?.length}</span>
                        <span className="stat-label">Blogs</span>
                    </div>
                </div>
            </div>


            <div className="lower-container">
                <h3>Your Blogs</h3>
                {
                    data?.length > 0 ? (
                        data.map((e, _) => {
                            return (
                                <div key={e._id} className="card">
                                    <Myblogs props={e} onDelete={handleDelete} showConfirm={showConfirm} setShowConfirm={setShowConfirm}/>
                                </div>
                            )
                        })
                    ) : (
                        <div className="no-blog">
                            <h1>You don't have any blog...</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProfile;


