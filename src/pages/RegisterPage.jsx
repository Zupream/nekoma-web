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
          <div className="bg-card   rounded-r-2xl ">
            <div className="p-4 flex text-center flex-col ">
              <div className="text-bb text-xl font-medium">ลงทะเบียน</div>
              <div className="text-bb">
                กรุณากรอกข้อมูลของคุณเพื่อสร้างบัญชี
              </div>
            </div>
            <hr></hr>

            <div className="p-6 gap-5 flex content-around flex-col ">
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b  flex items-center text-bb">
                  Firstname :
                </h1>

                <input
                  type="text"
                  placeholder="firstname"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </div>
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b flex items-center text-bb">
                  Lastname :
                </h1>
                {/* <input
                  type="text"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="นามสกุล"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                ></input> */}
                <input
                  type="text"
                  placeholder="lastname"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </div>
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b flex items-center text-bb">Tel :</h1>
                {/* <input
                  type="tel"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="เบอร์โทร"
                  onChange={(e) => setUser({ ...user, tel: e.target.value })}
                ></input> */}
                <input
                  type="text"
                  placeholder="tel"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) => setUser({ ...user, tel: e.target.value })}
                />
              </div>
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b flex items-center text-bb">Email :</h1>
                {/* <input
                  type="email"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="อีเมล"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                ></input> */}
                <input
                  type="email"
                  placeholder="email"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b flex items-center text-bb">
                  Password :
                </h1>
                {/* <input
                  type="password"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="พาสเวิร์ด"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input> */}
                <input
                  type="password"
                  placeholder="password"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className=" flex-row grid grid-cols-3 justify-between ">
                <h1 className=" text-b flex items-center text-bb">
                  Confirm Password :
                </h1>
                {/* <input
                  type="password"
                  className="form-input   h-12 rounded-xl border-white drop-shadow-md "
                  placeholder="ยืนยันพาสเวิร์ด"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                ></input> */}
                <input
                  type="password"
                  placeholder="confirm Password"
                  className="input col-span-2 input-sm input-bordered w-full max-w-xs"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-2 p-1  ">
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
