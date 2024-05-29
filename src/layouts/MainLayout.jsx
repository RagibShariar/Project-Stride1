import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LoadingComponent from "../components/Shared/LoadingComponent";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollRestoration/>
      <Navbar />
      {navigation.state === "loading" ? <LoadingComponent /> : <Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;
