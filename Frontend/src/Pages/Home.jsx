import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../Store/BlogSlice";
import '../CSS/home.css';
import HomeDesign from "./HomeDesign";
import Card from "../Components/Card";
import RightCard from "../Components/RightCard";   

const Home = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);


    const [data, setData] = useState([]);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get("http://localhost:4000/view", {
              withCredentials: true,
            });

            console.log(res);
            const blogs = res?.data?.blogs;
            console.log(blogs);
            setData(blogs);
            dispatch(addBlog(res?.data?.data));
        } catch (error) {
            console.log("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchBlogs();
        } else {
            setData([]); 
        }
    }, [user]);


    return (
        <div >
            {
                user ? (
                    
                        <div className="main_container">
                            <div className="left_container1">
                                <div className="feature_container">
                                    <p className="feature_btn">+</p>
                                    <p className="feature_btn">For you</p>
                                    <p className="feature_btn">Following</p>
                                    <p className="feature_btn">Featured</p>
                                </div>
                                <div className="Card_container" >
                                    {
                                        data?.map((e, _) => {
                                            return (
                                                <div key={e._id} className="card">
                                                    <Card props={e} /> 
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="right_container">
                                <h3>Stiff Picks</h3>
                                <RightCard data={data} />
                            </div>
                        </div>
                    
                ) : (
                    <HomeDesign />
                )
            }
        </div>
    );
}

export default Home;
