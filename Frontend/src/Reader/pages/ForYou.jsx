import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import CardSkeletonUI from "../../shared/components/CardSkeletonUI";

const ForYou = () => {
  const { blogsData, loading } = useOutletContext();

  return (
    <div className="Card_container">
    {loading ? (
      Array.from({ length: 5 }).map((_, index) => (
        <CardSkeletonUI key={index} />
      ))
    ) : (
      blogsData.map((blog) => (
        <Card key={blog._id} props={blog} />
      ))
    )}
  </div>
  );
};

export default ForYou;
