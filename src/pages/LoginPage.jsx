import React, { useState } from "react";
import PageContainer from "../layouts/PageContainer";
import logo from "../image/Logologin.png";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const values = useAuth();
  const { onSubmitLogin } = values;

  return (
    <PageContainer>
      <div className="grid place-items-center bg-background  h-[calc(100vh-12rem)]">
        <div className="w-2/3 h-4/5 bg-white grid grid-cols-2 rounded-2xl drop-shadow-xl ">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-80 "></img>
          </div>
          <div className="bg-card  rounded-r-2xl ">
            <div className="p-4 flex flex-col text-center ">
              <div className="text-bb text-xl font-medium">เข้าสู่ระบบ</div>
              <div className="text-bb">กรุณาเข้าสู่ระบบเพื่อทำการจองต่อ</div>
            </div>
            <hr></hr>

            <div className="p-6 flex content-around flex-col ">
              <div className="flex flex-col justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Email :
                </h1>
                {/* <input
                  type="email"
                  className="  rounded-xl border-white drop-shadow-md "
                  placeholder="กรุณากรอกอีเมลของท่าน"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                /> */}
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Password :
                </h1>
                {/* <input
                  type="password"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="กรุณากรอกรหัสผ่านของท่าน"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input> */}
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="p-2 mt-4">
                <button
                  className="px-4 py-3 btn btn-secondary border-none w-full h-12 rounded-xl bg-button text-white drop-shadow-md"
                  onClick={() => onSubmitLogin(user)}
                >
                  เข้าสู่ระบบ
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 h-16 p-2 mt-2  ">
                <button
                  className="bg-regis btn btn-success border-none text-white rounded-xl"
                  onClick={() => navigate("/register")}
                >
                  ลงทะเบียน
                </button>
                <button className="bg-midnight btn btn-outline border-none text-white rounded-xl">
                  ลืมรหัสผ่าน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-pink-100 py-52 px-20 m-20 flex flex-row justify-between"></div> */}
    </PageContainer>
  );
}

export default LoginPage;
