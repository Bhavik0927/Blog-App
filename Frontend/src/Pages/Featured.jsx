import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import Card from "../Components/Card";

const Featured = () => {

  const { blogsData } = useOutletContext();
  const login_userIntrest = useSelector(store => store.user?.user);

  const User_Intrest = login_userIntrest.categories[0].split(',').map(c => c.trim().toLowerCase());

  const featuredBlogs = blogsData.filter(blog => !User_Intrest.includes(blog.categories.toLowerCase()));

  return (
    <>
      { featuredBlogs.map((data) => (
        <Card props={data} />
      ))}
    </>
  );
};

export default Featured;
