import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../CSS/Signup.css";
import Categories from "./Categories";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [categories, setCategories] = useState([]);

  const [step, setStep] = useState(1);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePic", profilePic);
    formData.append("categories", JSON.stringify(categories));
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
      toast.error("Something is wrong");
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="signup-container">
      {step === 1 && (
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h2>Create Account</h2>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
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
        </form>
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
