import React, { useState } from "react";
import PageContainer from "../layouts/PageContainer";
import logo from "../image/Logologin.png";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const values = useAuth();
  const { onSubmitRegister } = values;
  // const { onChangeRegister } = values;

  return (
    <PageContainer>
      <div className="grid place-items-center bg-background  h-[calc(100vh-12rem)]">
        <div className="w-2/3 h-4/5 bg-white grid grid-cols-2 rounded-2xl drop-shadow-xl ">
          <div className="flex items-center justify-center">
            <img src={logo} className="w-80 "></img>
          </div>
          <div className="bg-card  rounded-r-2xl ">
            <div className="p-6 pt-12 flex flex-col ">
              <div className="text-bb text-xl font-medium">ลงทะเบียน</div>
              <div className="text-bb">
                กรุณากรอกข้อมูลของคุณเพื่อสร้างบัญชี
              </div>
            </div>
            <hr></hr>

            <div className="p-6 flex content-around flex-col ">
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Firstname :
                </h1>
                <input
                  type="text"
                  className="  form-input    h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="ชื่อ"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  // onChange={(e) =>
                  //   onChangeRegister("firstName", e.target.value)
                  // }
                ></input>
              </div>
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Lastname :
                </h1>
                <input
                  type="text"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="นามสกุล"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                ></input>
              </div>
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Tel :
                </h1>
                <input
                  type="tel"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="เบอร์โทร"
                  onChange={(e) => setUser({ ...user, tel: e.target.value })}
                ></input>
              </div>
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Email :
                </h1>
                <input
                  type="email"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="อีเมล"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                ></input>
              </div>
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Password :
                </h1>
                <input
                  type="password"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="พาสเวิร์ด"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input>
              </div>
              <div className="flex flex-row justify-between p-2">
                <h1 className="text-lg text-b flex items-center text-bb">
                  Confirm Password :
                </h1>
                <input
                  type="password"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="ยืนยันพาสเวิร์ด"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                ></input>
              </div>

              <div className="grid grid-cols-2 gap-3 h-16 p-2  ">
                <button
                  className="bg-midnight btn btn-outline border-none text-white rounded-xl"
                  onClick={() => navigate("/")}
                >
                  กลับ
                </button>
                <button
                  className="bg-regis btn btn-success border-none text-white rounded-xl"
                  onClick={() => onSubmitRegister(user)}
                >
                  ลงทะเบียน
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

export default RegisterPage;
