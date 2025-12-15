import "../CSS/RightCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CategorieTypes } from "./Constant";
import { Link } from "react-router-dom";
import { addProfiles } from "../Store/ProfileSlice";
import { toast } from "react-toastify";
import { CiBookmarkCheck } from "react-icons/ci";
import { StaffPicks } from "./Constant";
import { GiStarShuriken } from "react-icons/gi";

const RightCard = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector((store) => store?.user?.user?.existUser);

  const userCategories = user?.categories[0]
    .split(",")
    .map((c) => c.toLowerCase());

  const CategorieType = CategorieTypes.map((c) => c.toLowerCase());

  const remainingTypes = CategorieType?.filter(
    (type) => !userCategories?.includes(type)
  );

  const RecommandedType = remainingTypes.map(
    (c) => c.charAt(0).toUpperCase() + c.slice(1)
  );

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/AllProfiles", {
          withCredentials: true,
          signal: controller.signal,
        });
        const result = await response?.data?.data;
        dispatch(addProfiles(result));
        setData(result);
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

  return (
    <>
      <div className="Card-container">
        {StaffPicks.map((data, idx) => (
          <div key={idx} className="Stiff_card">
            <div className="stiff_card_upper">
              <img src={data?.image} alt={data?.subtitle} />
              <p>
                In <span>{data?.subtitle}</span> by
                <span> {data?.author} </span>
              </p>
            </div>
            <h3>{data?.title}</h3>
            <p className="date_star">
              <span className="star">
                <GiStarShuriken />
              </span>
              {data?.date}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3>Recommended topics</h3>
        <div className="TypesContainer">
          {RecommandedType.slice(0, 8).map((data, id) => (
            <button key={id}>{data}</button>
          ))}
        </div>
        <p>
          <Link to="/see-more" className="see_more">
            See more topics
          </Link>
        </p>
      </div>

      <div className="Profile_Container">
        <h3>Who is follow</h3>
        {data
          .slice(0, 3)
          .reverse()
          .map((d, _) => (
            <div key={d._id} className="Profile-box">
              <div className="profile">
                <img src={d.profilePic} alt="" />
                <div>
                  <Link to={`/profile/${d._id}`}>
                    <h3>
                      {d?.firstname} {d.lastname}
                    </h3>
                  </Link>
                  <p>{d.profession}</p>
                </div>
              </div>
              <button className="Boxbtn">Follow</button>
            </div>
          ))}
        <p>
          <Link to="/profile" className="see_more">
            See more suggestions
          </Link>
        </p>
      </div>

      <h3>Reading List</h3>
      <p>
        Click{" "}
        <span>
          {" "}
          <CiBookmarkCheck />{" "}
        </span>{" "}
        the on any story to easily add it to your reading list or a custom list
        that you can share.
      </p>
    </>
  );
};

export default RightCard;
