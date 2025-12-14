import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUser } from "../Store/UserSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    const controller = new AbortController();

      const fetchUser = async () => {
        if (!user) return;

        try {
          const res = await axios.get("http://localhost:4000/profile", {
            withCredentials: true,
            signal:controller.signal
          });
          if (res.data) {
            dispatch(addUser(res.data));
          }
        } catch (error) {
          if (error.name === "CanceledError") {
            toast.error("Request cancled");
          } else {
            toast.error(error.message);
          }
        }
      };
    

    fetchUser();

    return () => {
      controller.abort();
    };

  }, []);


  console.log("Body Page")
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
