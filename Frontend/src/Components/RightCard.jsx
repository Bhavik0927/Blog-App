import "../CSS/RightCard.css";
import { useSelector } from "react-redux";
import { CategorieTypes } from "./Constant";

const RightCard = ({ data }) => {
  const user = useSelector((store) => store?.user?.user?.existUser);

  const userCategories = user?.categories[0]
    .split(",")
    .map((c) => c.toLowerCase());

  const CategorieType = CategorieTypes.map((c) => c.toLowerCase());

  const remainingTypes = CategorieType.filter(
    (type) => !userCategories.includes(type)
  );

  const RecommandedType = remainingTypes.map((c) => c.charAt(0).toUpperCase() + c.slice(1));
  console.log(RecommandedType);
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
      </div>
    </>
  );
};

export default RightCard;
