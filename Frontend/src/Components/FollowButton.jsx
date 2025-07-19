import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const FollowButton = ({ currentUser, targetUser }) => {

    const [isFollowing, setIsFollowing] = useState(false);


    useEffect(() => {
        if (currentUser?.following?.includes(targetUser)) {
            
            setIsFollowing(true);
        }
    }, [currentUser, targetUser]);

    const handleFollow = async () => {
        try {
            await axios.put(`http://localhost:4000/follow/${targetUser}`, {}, { withCredentials: true });

            setIsFollowing(!isFollowing);

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
