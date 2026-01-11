import { useState, useEffect } from "react";
import "../CSS/UserProfile.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const UserProfile = () => {

  const { id } = useParams();

  const [user1, setUser] = useState([]);

  const firstName = user1?.firstname?.toLowerCase();
  const lastName = user1?.lastname?.toLowerCase();

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/profile/${id}`,
          {
            withCredentials: true,
            signal: controller.signal,
          }
        );

        setUser(response?.data?.data);
      } catch (error) {
        if (error.name === "CanceledError") {
          toast.error("Request cancled");
        } else {
          console.error(error);
        }
      }
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <div className="profile-container">
        <div className="profile-left">
          <img src={user1.profilePic} alt="Profile" className="profile-img" />
          <h2 className="profile-name">
            {user1?.firstname} {user1?.lastname}
          </h2>
          <p className="profile-bio">{user1.profession}</p>

          <div className="profile-info">
            <p>
              <strong>Email:</strong> {user1.email}
            </p>
            <p>
              <strong>Joined:</strong> {user1?.updatedAt?.split("T")[0]}
            </p>
          </div>
        </div>

        <div className="profile-right">
          <h3>Your Blogs</h3>
          {user1.createdBlogs?.length > 0 ? (
            <div className="blogs-grid">
              {user1?.createdBlogs?.map((blog) => (
                <div key={blog._id} className="blog-card">
                  <Link
                    to={`/@${firstName}${lastName}/${blog.title}/${blog._id}`}
                  >
                    <img src={blog.blogImage} alt={blog.title} />

                    <div className="blog-overlay">
                      <span className="category">{blog.categories}</span>
                      <h4>{blog.title}</h4>
                      <p>{blog.subtitle}</p>
                      <small>{new Date(blog.createdAt).toDateString()}</small>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <h3>There is no blog </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
