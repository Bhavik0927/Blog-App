import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../Store/BlogSlice";
import "../CSS/home.css";
import HomeDesign from "./HomeDesign";
import RightCard from "../Components/RightCard";
import { toast } from "react-toastify";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);

  const [blogsData, setBlogsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/AllBlogs", {
          withCredentials: true,
          signal: controller.signal,
        });
        const blogs = res?.data?.blogs;
        dispatch(addBlog(blogs));
        setBlogsData(blogs);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchBlogs();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() =>{
    smoothScrollToTop();
  }, [currentPage])

  const smoothScrollToTop = () =>{
    const startPosition = window.pageXOffset;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) =>{
      if(startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) /2;

      window.scrollTo(0, startPosition * (1 - ease));

      if(timeElapsed < duration){
        requestAnimationFrame(animation)
      }
    }
    requestAnimationFrame(animation);
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const handlePageChange = (newPage) =>{
    setCurrentPage(newPage);
  }

  // console.log("Home page");

  return (
    <div>
      {user ? (
        <div className="main_container">
          <div className="left_container1">
            <div className="feature_container">
              <p className="feature_btn">+</p>
              <Link to="/">
                <p className="feature_btn">For you</p>
              </Link>
              <Link>
                <p className="feature_btn">Following</p>
              </Link>
              <Link to="/featured">
                <p className="feature_btn">Featured</p>
              </Link>
            </div>

            <Outlet context={{ blogsData: currentBlogs }} />

            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Prev
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>

          <div className="right_container">
            <h3>Stiff Picks</h3>
            <RightCard data={blogsData} />
          </div>
        </div>
      ) : (
        <HomeDesign />
      )}
    </div>
  );
};

export default Home;
