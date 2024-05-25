import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const GoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useContext(AuthContext);
  const from = location?.state?.from?.pathname;
  console.log("from google login button click", from)

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // navigate(location?.state ? location.state : '/')
        navigate(from || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handleGoogleLogin} className="btn">
        <FcGoogle size={24} />
        Google
      </button>
    </>
  );
};

export default GoogleLogin;
