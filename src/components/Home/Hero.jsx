import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Hero = () => {
  const handleClick = () => {
    Swal.fire({
      title: "You've Clicked!",
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Confirm'
    })
  }
  return (
    <>
      <div className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={handleClick} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
