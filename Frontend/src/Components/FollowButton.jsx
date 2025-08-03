import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFollower, addFollowing } from '../Store/FollowerSlice';

const FollowButton = ({ currentUser, targetUser }) => {

    const dispatch = useDispatch();
    const following = useSelector((state) => state?.follower?.following);

    const [isFollowing, setIsFollowing] = useState(false);


    useEffect(() => {

        if (!targetUser || !following) return;
        setIsFollowing(following.includes(targetUser));
    }, [following, targetUser]);


    const handleFollow = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/follow/${targetUser}`, {}, { withCredentials: true });
            console.log(response);

            dispatch(addFollowing(response.data.following));
            dispatch(addFollower(response.data.follower));
            
            setIsFollowing(prev => !prev);

        } catch (err) {
            console.error("Error in follow API:", err.response?.data?.err || err.message);
        }
    }
    return (
        <button onClick={handleFollow} disabled={!targetUser} >
            {isFollowing ? "Unfollow" : "Follow"}
        </button>
    )
}

export default FollowButton;
