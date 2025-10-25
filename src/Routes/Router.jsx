import { createBrowserRouter } from "react-router";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";

import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Auth from "../Layouts/Auth/Auth";
import Register from "../Pages/Register/Register";
import PrivateRouth from "../Components/PrivateRouth/PrivateRouth";
import Update from "../Pages/Update/Update";
import Forget from "../Pages/Forget/Forget";
import Review from "../Components/Review/Review";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/ServiceData.json"),
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/Profile",
        Component: Profile,
      },
      {
        path: "/update",
        Component: Update,
      },
      {
        path: "/review",
        Component: Review,
      },
      {
        path: "/ServiceDetails/:serviceId",
        element:<PrivateRouth>
          <ServiceDetails></ServiceDetails>
        </PrivateRouth>,

        loader: () => fetch("/ServiceData.json"),
      },
    ],
  },
  {
    path:"/auth",
   Component:Auth,
    children:[
    {
        path:"/auth/login",
        Component:Login,
    },{
        path:"/auth/register",
        Component:Register,
    },{
        path:"/auth/forget",
        Component:Forget,
    }
    ]
  },
]);
export default router;
