import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({role, children}) =>{
    const user = useSelector(store => store?.user?.user);
    console.log("Protected route => ", user)

    if(!user) return <Navigate to="/login"/>
    if(role && user.role !== role) return <Navigate to='/' />

    return children;
}


export default ProtectedRoute;