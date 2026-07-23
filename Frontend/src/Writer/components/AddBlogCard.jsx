import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../shared/styles/CSS/AddBlogCard.css";
import { api, CategorieTypes } from "../../shared/constants/Constant.jsx";

const AddBlogCard = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [blog, setBlog] = useState("");
  const [category, setCategory] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("blog", blog);
    formData.append("blogImage", blogImage);
    formData.append("categories", category);

    try {
      setLoading(true);

      await api.post("/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Blog created successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blog-container">
      <form className="blog-card" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-btn-icon"
          onClick={() => navigate("/")}
        >
          <IoClose />
        </button>

        <h2>Create Blog</h2>

        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Sub Title</label>
          <input
            type="text"
            placeholder="Enter subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Blog</label>
          <textarea
            placeholder="Write your blog..."
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="input-group">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {CategorieTypes.map((item) => (
                <option key={item} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBlogImage(e.target.files[0])}
            />
          </div>
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlogCard;