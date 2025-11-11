import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import PrivetRoute from "../provider/PrivetRoute";
import UpcomingEvent from "../pages/UpcommingEvent/UpcomingEvent";
import EventDetail from "../pages/Eventdetail/Eventdetail";
import JoinedEvent from "../pages/JoinedEvent/JoinedEvent";
import ManageEvents from "../pages/ManageEvents/ManageEvents";
import UpdateEvent from "../pages/UpdateEvent/UpdateEvent";

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
        element: <UpcomingEvent></UpcomingEvent>,
      },
      {
        path: "/event-detail/:id",
        element: <EventDetail></EventDetail>,
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
        path: "/joined-event",
        element: (
          <PrivetRoute>
            <JoinedEvent></JoinedEvent>
          </PrivetRoute>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <PrivetRoute>
            <ManageEvents></ManageEvents>
          </PrivetRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivetRoute>
            <UpdateEvent></UpdateEvent>
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
