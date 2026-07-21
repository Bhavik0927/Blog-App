import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Store/auth/UserSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../../shared/constants/Constant";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  useEffect(() => {
    const controller = new AbortController();

      const fetchUser = async () => {
        if (user) return;

        try {
          const res = await api.get("/profile", {
            signal:controller.signal
          });
          if (res.data) {
            dispatch(addUser(res.data));
          }
        } catch (error) {
          if (error.name === "CanceledError") {
            console.log("Request cancled");
          } else {
            console.log("Request cancled");
          }
        }
      };
    

    fetchUser();

    return () => {
      controller.abort();
    };

  }, []);


  
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
