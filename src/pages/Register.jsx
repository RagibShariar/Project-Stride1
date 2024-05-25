import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { AuthContext } from "../components/Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("from register page", location);
  const from = location?.state?.from?.pathname;
  const [passMatch, setPassMatch] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;
    // console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setPassMatch(false);
    }
    if (password === confirmPassword) {
      createUser(email, password)
      .then((result) => {
        // navigate(location?.state ? location.state : '/')
        navigate(from || '/')
      })
      .catch((error) => {
        console.log(error)
      });
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-zinc-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          {/* Login Form Start */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {!passMatch && (
                  <p className="text-red-500 text-sm">
                    Password doesn't match!
                  </p>
                )}
              </div>
              <div className="form-control mt-2">
                <button className="mb-4 btn btn-primary">Register</button>
              </div>
              <GoogleLogin />
              <div className="mt-2">
                <p className="font-semibold text-sm">
                  Already have an account?{" "}
                  <Link to={"/login"} className="text-red-500" state={{from:location.state?.from}}>
                    Login
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

export default Register;
