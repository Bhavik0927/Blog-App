import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../shared/styles/CSS/Signup.css";
import Categories from "../../Reader/pages/Categories";
import { FaPenNib } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [categories, setCategories] = useState([]);

  const [step, setStep] = useState(1);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("profilePic", profilePic);
    formData.append("categories", categories);
    try {
      const res = await axios.post("http://localhost:4000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: "true",
      });
      console.log(res);
      toast.success("Successfully Sign-up");
      Navigate("/login");
    } catch (error) {
      toast.error("Something is wrong", error?.message);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="signup-container">
      <h1>Join Connect </h1>
      <p>Create your account and start your journey</p>
      {step === 1 && (
        <>
          <form
            className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >

            <div className="form-group">
              <label htmlFor="firstName">Username</label>
              <FaRegUser className="user-icon" />
              <input
                name="userName"
                id="userName"
                placeholder="John Doe"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <FaEnvelope className="mail-icon" />
              <input
                name="email"
                id="email"
                placeholder="your@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <FaLock className="lock-icon" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="......."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>


            <div className="form-group">
              <label>I want to...</label>

              <div className="role-selection">
                <div
                  className={`role-card ${role === "WRITER" ? "active" : ""}`}
                  onClick={() => setRole("WRITER")}
                >
                  <FaPenNib />
                  <span>Write Blogs</span>
                </div>

                <div
                  className={`role-card ${role === "READER" ? "active" : ""}`}
                  onClick={() => setRole("READER")}
                >
                  <FaBookReader />
                  <span>Read Blogs</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Profile picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setProfilePic(e.target.files[0]);
                }}
                className={{ marginBottom: "10px", color: "#fff" }}
              />
            </div>

            <button type="submit" className="submit-btn">
              Next
            </button>
            <div className="Bottom-container">
              <p>Already have an account? <span><Link to='/login'>Sign in</Link></span> </p>
            </div>
          </form>
        </>
      )}

      {step === 2 && (
        <Categories
          categories={categories}
          setCategories={setCategories}
          prevStep={prevStep}
          submit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Signup;
