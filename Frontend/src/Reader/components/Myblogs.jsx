
import { toast } from "react-toastify";
import axios from 'axios';
// import '../CSS/Myblogs.css';
import { BsStars } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { useHref } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const Myblogs = ({ props, onDelete, showConfirm, setShowConfirm }) => {

    const link = useHref();
    const Navigate = useNavigate();
    const user = useSelector(state => state.user?.user?.existUser);


    const savedBlog = async () => {
        try {
            const response = await axios.post('http://localhost:4000/saveblog', { blogId: props._id }, { withCredentials: true });
            toast.success(response?.data?.message);
        } catch (error) {
            toast.error(error?.message);
        }

    }

    const handleDeleteClick = () => {
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        onDelete(props._id);
        setShowConfirm(false);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };

     const firstName = user?.firstname.toLowerCase();
     const lastName = user?.lastname.toLowerCase();
     const title = props?.title.split(' ').join('-');
    

    return (
        <div className="main_card_info">

            <div className="main_content_container">
                <div className="content_block" >
                    <Link to={`/@${firstName}${lastName}/${title}/${props._id}`}>
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
                    {
                        link === '/myprofile' ? (
                            <>
                                <CiEdit onClick={() => Navigate(`/editblog/${props._id}`)} /> <MdDelete onClick={() => { handleDeleteClick(props._id) }} />
                            </>
                        ) :
                            <CiBookmarkCheck onClick={() => savedBlog()} />
                    }
                </div>
            </div>
            {/* Confirm Delete Modal */}
            {showConfirm && (
                <div className="modal-overlay1">
                    <div className="confirm-box1">
                        <p>Are you sure you want to delete this blog?</p>
                        <div className="confirm-buttons1">
                            <button className="confirm-btn1 delete1" onClick={confirmDelete}>Yes, Delete</button>
                            <button className="confirm-btn1 cancel1" onClick={cancelDelete}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Myblogs;