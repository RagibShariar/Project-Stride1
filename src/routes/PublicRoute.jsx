import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (!user) {
    return children;
  }
  return <Navigate  replace to="/" />;
  // return <Navigate state={location.pathname} to="/login" />;
};

export default PublicRoute;