import { createBrowserRouter } from "react-router-dom";
import InitialLayout from "../layout/InitialLayout";
import NewDiscount from "../pages/NewDiscount.jsx";
import ManageDiscount from "../pages/ManageDiscount/Home";
import Coupon from "../pages/Coupon/Home";
import Advertise from "../pages/Advertise/Home";
import Notfound from "../pages/NotFound/index.jsx";
import NewSellerRegistration from "../pages/NewSellerRegistration/Home/index.jsx";
import Home from "../pages/Customer/Home/index.jsx";
import Login from "../pages/Customer/Login/index.jsx";
import Signup from "../pages/Customer/Signup/index.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/seller-dashboard",
    element: <InitialLayout />,
    children: [
      {
        path: "/seller-dashboard",
        element: <ManageDiscount />,
      },
      {
        path: "/seller-dashboard/new-dscount",
        element: <NewDiscount />,
      },
      {
        path: "/seller-dashboard/manage-discount",
        element: <ManageDiscount />,
      },
      {
        path: "/seller-dashboard/coupon",
        element: <Coupon />,
      },
      {
        path: "/seller-dashboard/advertise",
        element: <Advertise />,
      },
    ],
  },
  {
    path: "/new-seller-registration",
    element: <NewSellerRegistration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default routers;
