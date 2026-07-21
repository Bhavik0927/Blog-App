import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import '../../shared/styles/CSS/Explore.css';
import { api } from "../../shared/constants/Constant";



const Explore = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await api.get("/AllBlogs");

    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="main_container">
      {blogs &&
        blogs.map((e, idx) => (
          <div className="container" key={idx}>
            <Card props={e} />
          </div>
        ))}
    </div>
  );
};

export default Explore;
