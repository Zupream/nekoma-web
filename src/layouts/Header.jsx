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
function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-midnight">
      <PageContainer>
        <div className="flex flex-row justify-between items-center  h-16 overflow-hidden">
          {user ? (
            <>
              <div onClick={() => navigate("/")} className="cursor-pointer">
                <img src={logo} className="object-cover w-16 "></img>
              </div>
              <div className="text-white">HELLO : {user.firstName}</div>
            </>
          ) : (
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img src={logo} className="object-cover w-16 "></img>
            </div>
          )}

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
      </PageContainer>
    </div>
  );
}

export default Header;
