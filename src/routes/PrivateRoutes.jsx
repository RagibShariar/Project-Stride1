import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return(
    <>
    <div className=" flex items-center justify-center">
      <div className="loading loading-bars loading-lg">
      
      </div>
    </div>;
    </>)
  }

  if (user) {
    return children;
  }
  // return <Navigate state={location.pathname} to="/login" />;
  return <Navigate state={{from: location}} replace to="/login" />; 
};

export default PrivateRoutes;
