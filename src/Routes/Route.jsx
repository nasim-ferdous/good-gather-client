import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpcommingEvent from "../pages/UpcommingEvent/UpcommingEvent";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import PrivetRoute from "../provider/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/up-coming-event",
        element: <UpcommingEvent></UpcommingEvent>,
      },
      {
        path: "/create-event",
        element: (
          <PrivetRoute>
            <CreateEvent></CreateEvent>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
