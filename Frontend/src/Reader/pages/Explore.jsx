import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import '../../shared/styles/CSS/Explore.css';
import { useHref } from "react-router-dom";

const Explore = () => {
  const [blogs, setBlogs] = useState([]);

  const href = useHref();
  console.log(href)

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:4000/AllBlogs", {
      withCredentials: true,
    });

    console.log(response.data.blogs);
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
