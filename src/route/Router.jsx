import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import AdminContainer from "../layouts/AdminContainer";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import CheckroomPage from "../pages/CheckroomPage";
import RoomtypePage from "../pages/RoomtypePage";
import RulePage from "../pages/RulePage";
import PaymentPage from "../pages/PaymentPage";
import HistoryPage from "../pages/HistoryPage";
import SuccessPage from "../pages/SuccessPage";

import ConfirmSlip from "../admin/ComfirmSlip";
import Editroom from "../admin/Editroom";
import Detailedit from "../admin/Detailedit";
import RedirectIfAuthenticated from "../layouts/RedirectIfAuthenticated";
import ProtectedRoute from "../layouts/ProtectedRoute";
import AdminProtectedRoute from "../layouts/AdminProtectedRoute";
import AdminContextProvider from "../contexts/AdminContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <CheckroomPage />,
      },
      {
        path: "/room/:roomId",
        element: <RoomtypePage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <Container />
      </RedirectIfAuthenticated>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/rule",
        element: <RulePage />,
      },
      {
        path: "/payment/:bookingId",
        element: <PaymentPage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AdminProtectedRoute>
        <AdminContainer />
      </AdminProtectedRoute>
    ),
    children: [
      {
        path: "/admin/approve",
        element: <ConfirmSlip />,
      },
      {
        path: "/admin/room",
        element: <Editroom />,
      },
      {
        path: "/admin/edit/:roomId",
        element: <Detailedit />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
