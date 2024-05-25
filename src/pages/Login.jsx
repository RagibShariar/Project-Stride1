import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { AuthContext } from "../components/Providers/AuthProvider";

const Login = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  // ====================================
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log("from login page", location);
  // console.log(user)

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    await signIn(email, password)
      .then((result) => {
        // navigate(location?.state ? location.state : '/')
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        navigate(from || "/");
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Login Failed. Try again",
        });
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-zinc-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mx-14 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="mb-4 btn bg-red-500 text-white">
                  Login
                </button>
              </div>
              <GoogleLogin />
              <div className="mt-2">
                <p className="font-semibold text-sm">
                  New Here?{" "}
                  <Link
                    to={"/register"}
                    className="text-red-500"
                    state={location.state?.from}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
