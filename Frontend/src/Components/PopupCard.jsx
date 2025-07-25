import React from 'react';
import '../CSS/PopupCard.css';


const PopupCard = ({ blog }) => {
    return (
        <div >
            <div className='popup_first'>
                <div className='popup_img_box'>
                    <img className='popup_img' src={blog?.createdBy?.profilePic} alt="" />
                </div>
                <button className='popup_followbtn'>Follow</button>
            </div>
            <h3>{blog?.createdBy?.firstname} {blog?.createdBy?.lastname}</h3>
            <p className='follower'>{ }followers</p>
            <p>Senior Product Designer (Growth)</p>
            <div className="card-arrow" />
        </div>
    )
}

export default PopupCard