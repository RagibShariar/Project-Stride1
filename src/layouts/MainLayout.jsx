import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LoadingComponent from "../components/Shared/LoadingComponent";
import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { HashLoader } from "react-spinners";

const MainLayout = () => {
  const navigation = useNavigation();
  const { loading } = useContext(AuthContext);
  // console.log(loading)

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
     <HashLoader/>
      </div>
    )
  }

  return (
    <div >
      <ScrollRestoration/>
      <Navbar />
      {navigation.state === "loading" ? <LoadingComponent /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;
