import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addUser } from '../Store/UserSlice.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../CSS/EditProfile.css'

const EditProfile = () => {

    const user = useSelector((state) => state?.user?.user);
    // console.log(user);

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [firstname, setFirstname] = useState(user?.existUser?.firstname || user?.firstname || '');
    const [lastname, setLastName] = useState(user?.existUser?.lastname || user?.lastname || '');
    const [email, setEmail] = useState(user?.existUser?.email || user?.email || '');
    const [profilePic, setProfilePic] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);

        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        try {
            const res = await axios.put('http://localhost:4000/profile/edit', formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

            // console.log(res);
            dispatch(addUser(res?.data?.user));
            toast.success('Update successfully...!! ');
            Navigate('/')
        } catch (error) {
            // console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }


    return (

        <form onSubmit={handleSubmit} className='Profile_Container1'>

            <div className='form-group'>
                <label htmlFor="title">FirstName</label>
                <input
                    id="title"
                    type="text"
                    value={firstname}
                    placeholder="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="textarea">LastName</label>

                <input
                    type="text"
                    value={lastname}
                    placeholder="Write an blog"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label htmlFor="title">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <input
                    type="file"
                    onChange={(e) => {
                        setProfilePic(e.target.files[0]);
                    }}
                    
                />
            </div>

            <div className='form-actions'>
                <button className="submit-btn" type='submit' disabled={loading} >
                    {loading ? "Loading..." : "Submit"}
                </button>
            </div>
        </form>
    )
}

export default EditProfile