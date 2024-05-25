import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";
import AllCountries from "../pages/AllCountries";
import CountryDetails from "../components/SingleCountry/CountryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "all-countries",
        loader: ()=> fetch("https://restcountries.com/v3.1/all"),
        element: <AllCountries />,
      },
      {
        path: "country/:countryID",
        loader: ({params})=> fetch(`https://restcountries.com/v3.1/name/${params.countryID}`),
        element: <CountryDetails />,
      },
      {
        path: "shop",
        element: <PrivateRoutes><Shop /></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <PublicRoute><Login /></PublicRoute>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dash",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
      },
    ],
  },
]);
