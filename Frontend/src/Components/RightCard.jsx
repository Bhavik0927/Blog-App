import "../CSS/RightCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CategorieTypes } from "./Constant";
import { Link } from "react-router-dom";

const RightCard = () => {

  const [data, setData] = useState([]);

  const fetchUser = async () => {
    const response = await axios.get('http://localhost:4000/AllProfiles', { withCredentials: true });
    const result = await response?.data?.data;
    console.log(result);
    setData(result);
  }


  const user = useSelector((store) => store?.user?.user?.existUser);

  const userCategories = user?.categories[0]
    .split(",")
    .map((c) => c.toLowerCase());

  const CategorieType = CategorieTypes.map((c) => c.toLowerCase());

  const remainingTypes = CategorieType.filter(
    (type) => !userCategories.includes(type)
  );

  const RecommandedType = remainingTypes.map((c) => c.charAt(0).toUpperCase() + c.slice(1));


  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <>
      <div className="Card-container">
        <div>
          <p>
            <span>
              {" "}
              <img src="" alt="" />{" "}
            </span>
            In The Riff by Eric Dockett
          </p>
        </div>
        <h3>Ozzy Orzbone : The Legeacy of Madman</h3>
        <p>
          <span>star</span> date
        </p>
      </div>

      <div>
        <h3>Recommended topics</h3>
        <div className="TypesContainer">
          {RecommandedType.slice(0, 8).map((data) => (
            <button>{data}</button>
          ))}
        </div>
        <p >
          <Link to="/see-more" className="see_more">
            See more topics
          </Link>
        </p>
      </div>

      <div className="Profile_Container">
        <h3>Who is follow</h3>
        {
          data.slice(0, 3).reverse().map((d, _) => (
            <div key={d.id} className="Profile-box">
              <div className="profile">
                <img src={d.profilePic} alt="" />
                <div>
                  <h3>{d?.firstname} {d.lastname}</h3>
                  <p>{d.profession}</p>
                </div>
              </div>
              <button className="Boxbtn">Follow</button>
            </div>

          ))
        }
        <p >
          <Link to="/" className="see_more">
            See more suggestions
          </Link>
        </p>
      </div>

    </>
  );
};

export default RightCard;
