import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import CheckroomPage from "./pages/CheckroomPage";
import RoomtypePage from "./pages/RoomtypePage";
import RulePage from "./pages/RulePage";
import HistoryPage from "./pages/HistoryPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import ConfirmSlip from "./admin/ComfirmSlip";
import Editroom from "./admin/Editroom";
import Detailedit from "./admin/Detailedit";
import Router from "./route/Router";
import AuthContextProvider from "./contexts/AuthContext";
import RoomContextProvider from "./contexts/RoomContext";
import BookingContextProvider from "./contexts/BookingContext";
import AdminContextProvider from "./contexts/AdminContext";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <HomePage /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <ProfilePage /> */}
      {/* <CheckroomPage /> */}
      {/* <RoomtypePage /> */}
      {/* <RulePage /> */}
      {/* <PaymentPage /> */}
      {/* <HistoryPage /> */}
      {/* <SuccessPage /> */}
      {/* <Footer /> */}

      {/* ****admin*** */}
      {/* <ConfirmSlip /> */}
      {/* <Editroom /> */}
      {/* <Detailedit /> */}
      <AdminContextProvider>
        <AuthContextProvider>
          <BookingContextProvider>
            <RoomContextProvider>
              <Router />
            </RoomContextProvider>
          </BookingContextProvider>
        </AuthContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
