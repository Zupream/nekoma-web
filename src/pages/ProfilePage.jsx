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

// import { useBooking } from "../contexts/BookingContext";
import { useAuth } from "../contexts/AuthContext";
// const { user } = useAuth();

function ProfilePage() {
  const values = useAuth();
  const { user } = values;
  return (
    <PageContainer>
      <div className="grid place-items-center bg-background  h-[calc(100vh-12rem)]">
        <div className="w-2/4 h-5/5 bg-background border-2 rounded-2xl drop-shadow-xl ">
          <div className="grid-cols-4 flex-col p-8">
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
                  <p>{user.email}</p>
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
                  <p className="text-lg">ชื่อ - นามสกุล</p>
                  <div className="flex flex-row justify-between">
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
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
                    <p>{user.tel}</p>
                    {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default ProfilePage;
