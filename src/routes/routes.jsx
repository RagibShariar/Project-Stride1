import { createBrowserRouter } from "react-router-dom";
import CountryDetails from "../components/SingleCountry/CountryDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import AddProduct from "../pages/Admin/AddProduct";
import AllProducts from "../pages/Admin/AllProducts";
import AllUsers from "../pages/Admin/AllUsers";
import EditProductPage from "../pages/Admin/EditProductPage";
import EditUser from "../pages/Admin/EditUser";
import Profile from "../pages/Admin/Profile";
import AllCountries from "../pages/AllCountries";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import PrivateRoutes from "./PrivateRoutes";

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
        loader: () => fetch("https://restcountries.com/v3.1/all"),
        element: <AllCountries />,
      },
      {
        path: "country/:countryID",
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.countryID}`),
        element: <CountryDetails />,
      },
      {
        path: "shop",
        loader: () =>
          fetch("https://best-furniture-server.onrender.com/products"),
        element: <Shop />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(
            `https://best-furniture-server.onrender.com/products/${params.id}`
          ),
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login />,
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
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoutes>
            <AllProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/edit-product/:id",
        loader: ({ params }) =>
          fetch(
            `https://best-furniture-server.onrender.com/products/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <EditProductPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/all-users",
        element: (
          <PrivateRoutes>
            <AllUsers />
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://best-furniture-server.onrender.com/users`),
      },
      {
        path: "/dash/edit-user/:userId",
        element: (
          <PrivateRoutes>
            <EditUser />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://best-furniture-server.onrender.com/users/${params.userId}`
          ),
      },
    ],
  },
]);
