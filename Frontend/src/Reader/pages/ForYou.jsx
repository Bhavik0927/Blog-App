import { useOutletContext } from "react-router-dom";
import Card from "../Components/Card";
import { useSelector } from "react-redux";

const ForYou = () => {
  const { blogsData } = useOutletContext();
  console.log(blogsData);
  const login_userIntrest = useSelector((store) => store?.user?.user );
  console.log(login_userIntrest);
  // console.log(login_userIntrest);

  // const User_Intrest = login_userIntrest?.existUser?.categories
  // .map((c) => c.trim().toLowerCase());
  
  // const ForMe_Blogs = blogsData.filter(
  //   (blog) => User_Intrest?.includes(blog?.categories?.toLowerCase())
  // );
  
  return (
    <div className="Card_container">
      {/* {ForMe_Blogs?.map((e, _) => {
        return (
          <div key={e._id} className="card">
            <Card props={e} />
          </div>
        );
      })} */}
    </div>
  );
};

export default ForYou;
