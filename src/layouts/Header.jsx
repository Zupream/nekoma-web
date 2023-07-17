import React from "react";
import PageContainer from "./PageContainer";
import logo from "../image/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../utils/localstorage";
import { Link } from "react-router-dom";
import Loading from "../components/common/Loading";
import { useBooking } from "../contexts/BookingContext";
function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { loading } = useBooking();

  const logOut = () => {
    removeAccessToken();
    navigate(0);
  };

  return (
    <div className="h-16 bg-midnight">
      <PageContainer>
        <div className="flex flex-row justify-between items-center  h-16 overflow-hidden">
          {user ? (
            <>
              <div className="cursor-pointer flex flex-row">
                <img
                  src={logo}
                  className="object-cover w-16 "
                  onClick={() => navigate("/")}
                ></img>
                {user.isAdmin ? (
                  <Link to="/admin/approve">
                    <button className="btn mt-1 ">Go to admin page</button>
                  </Link>
                ) : null}
              </div>

              <div className="text-white">HELLO : {user.firstName}</div>
            </>
          ) : (
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img src={logo} className="object-cover w-16 "></img>
            </div>
          )}

          {/* <button className="btn">Go to admin page</button> */}

          <div className="flex flex-row text-white">
            <div className="pl-2 cursor-pointer" onClick={() => navigate("/")}>
              หน้าแรก
            </div>

            {user ? (
              <>
                <div
                  className="pl-2 cursor-pointer"
                  onClick={() => navigate("/history")}
                >
                  การจอง
                </div>
                <div
                  className="pl-2 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  โปรไฟล์
                </div>
                <div className="pl-2 cursor-pointer" onClick={() => logOut()}>
                  ออกจากระบบ
                </div>
              </>
            ) : (
              <>
                <div
                  className="pl-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  เข้าสู่ระบบ
                </div>

                <FontAwesomeIcon icon={faRightToBracket} className="pt-1" />
                <div
                  className="pl-2 cursor-pointer"
                  onClick={() => navigate("/register")}
                >
                  ลงทะเบียน
                </div>
                <FontAwesomeIcon icon={faUserPlus} className=" w-5 h-5 " />
              </>
            )}
          </div>
        </div>
        <Loading loading={loading} />
      </PageContainer>
    </div>
  );
}

export default Header;
