import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Rooms from "../pages/rooms/Rooms";
import MyBookings from "../pages/bookings/MyBookings";
import RoomDetail from "../pages/roomDetail/RoomDetail";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/mybookings",
        element: <MyBookings></MyBookings>,
      },  {
        path: "/rooms/:id",
        element: <RoomDetail></RoomDetail>,
        loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)
      }
      ]
    },
  ]);
  export default router;

  