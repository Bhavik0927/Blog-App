import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFollowing } from '../Store/FollowerSlice';

const FollowButton = ({ currentUser, targetUser }) => {

    const dispatch = useDispatch();
    const following = useSelector((state) => state?.follower?.following);

    console.log(following);

    const [isFollowing, setIsFollowing] = useState(false);


    useEffect(() => {
        const checkFollowing = () => {
            const isUserFollowed = following.some((user) => user._id === targetUser)
            setIsFollowing(isUserFollowed);
        }
        checkFollowing();
    }, [isFollowing, targetUser]);


    const handleFollow = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/follow/${targetUser}`, {}, { withCredentials: true });

            setIsFollowing(!isFollowing);
            dispatch(addFollowing(response.data.following));

        } catch (err) {
            console.error("Error in follow API:", err.response?.data?.err || err.message);
        }
    }
    return (
        <button onClick={handleFollow} >
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    )
}

export default FollowButton;
