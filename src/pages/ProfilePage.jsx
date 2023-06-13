import React from "react";
import PageContainer from "../layouts/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faUser,
  faPenToSquare,
  faEnvelope,
  faPhone,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
// import { useAuth } from "../contexts/AuthContext";
// const { user } = useAuth();

function ProfilePage() {
  return (
    <PageContainer>
      <div className="grid place-items-center bg-background  h-[calc(100vh-12rem)]">
        <div className="w-2/4 h-4/6 bg-background border-2 rounded-2xl drop-shadow-xl ">
          <div className="flex flex-col p-8">
            <div className="flex flex-row pb-5">
              <FontAwesomeIcon
                icon={faAddressCard}
                size="2xl"
                style={{ color: "#4C241D" }}
                className="pt-1"
              />
              <h1 className="p-1 font-semibold text-2xl text-bb">
                รายละเอียดการติดต่อ
              </h1>
            </div>
            <hr></hr>
            <div>
              <div className="flex flex-row py-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="pt-2 pr-2"
                />
                <div className="text-bb w-11/12 ">
                  <p className="text-lg">E-mail</p>
                  {/* <div className="text-white">{user.email}</div> */}
                  <p>Detail database ไม่สามารถแก้ไขได้</p>
                </div>
              </div>
            </div>

            <hr></hr>
            <div>
              <div className="flex flex-row py-4">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="pt-2 pr-2"
                />
                <div className="text-bb w-11/12 ">
                  <p className="text-lg">ชื่อ-นามสกุล</p>
                  <div className="flex flex-row justify-between">
                    <p>Detail database แก้ไขได้</p>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="flex flex-row py-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="pt-2 pr-2"
                />
                <div className="text-bb w-11/12 ">
                  <p className="text-lg">เบอร์โทร</p>
                  <div className="flex flex-row justify-between">
                    <p>Detail database แก้ไขได้</p>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div>
                <div className="flex flex-row py-4">
                  <FontAwesomeIcon
                    icon={faKey}
                    size="lg"
                    style={{ color: "#4C241D" }}
                    className="pt-2 pr-2"
                  />
                  <div className="text-bb w-11/12 ">
                    <p className="text-lg">เปลี่ยนรหัสผ่าน</p>
                    <div className="flex flex-row justify-between">
                      <p>Detail database แก้ไขได้</p>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 h-16 p-2  ">
              <button className="bg-button btn btn-success border-none text-white rounded-xl drop-shadow-md">
                บันทึก
              </button>
              <button className=" bg-midnight btn btn-outline border-none text-white drop-shadow-md rounded-xl">
                ละทิ้ง
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default ProfilePage;
