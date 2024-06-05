import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useContext(AuthContext);
  const from = location?.state?.from?.pathname;
  // console.log("from google login button click", from)

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
          image: result.user.photoURL,
        };
        fetch(`https://best-furniture-server.onrender.com/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            Toast.fire({
              icon: "success",
              title: "Log in successfully"
            });
            localStorage.setItem("token", data?.token);
          });
        navigate(from || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full rounded text-base font-semibold tracking-wider text-gray-900"
      >
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleLogin;
