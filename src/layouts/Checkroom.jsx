import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCat } from "@fortawesome/free-solid-svg-icons";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Checkroom({ dateObject }) {
  const [checkIn, setCheckIn] = useState(
    dateObject?.checkIn ? new Date(dateObject.checkIn) : new Date()
  );
  // new Date คือวันปัจจุบัน >> หน้าโฮมยังไม่มีวันเชคอินเชคเอ้า เลยแสดงเป็นวันปัจจุบน
  // dateObject?.checkIn ? คือมีวันเชควินไหม
  const [checkOut, setCheckOut] = useState(
    dateObject?.checkOut ? new Date(dateObject.checkOut) : new Date()
  );
  const [petNumber, setPetNumber] = useState(
    dateObject?.petNumber ? +dateObject.petNumber : 1
  );

  const checkInStr = checkIn.toLocaleDateString();
  const checkOutStr = checkOut.toLocaleDateString();
  // toLocaleDateString = แปลงวันที่เป็นสตริง

  const navigate = useNavigate();

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ zIndex: 500000 }}>
        <CalendarContainer className={className}>
          <div>What is your favorite day?</div>
          <div style={{ zIndex: 500000 }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="p-8 ">
      <div className="w-100vw h-20 bg-card grid grid-cols-4 rounded-2xl border-8 box-content border-white drop-shadow-xl ">
        <div className="flex flex-row border-r-2 ">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="lg"
            style={{ color: "#4C241D" }}
            className="pl-2 pt-7"
          />
          <div>
            <DatePicker
              className="  form-input w-4/5 m-4 h-10 mt-5 z-50 rounded-xl border-white drop-shadow-md "
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
            />
          </div>
          {/* <input
            type="text"
            className="  form-input w-full m-4 h-10 mt-5 rounded-xl border-white drop-shadow-md "
            placeholder="test"
          /> */}
        </div>
        <div className="flex flex-row border-r-2">
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="lg"
            style={{ color: "#4C241D" }}
            className="pl-2 pt-7"
          />
          <div>
            <DatePicker
              className="  form-input w-4/5 m-4 h-10 mt-5 z-50 rounded-xl border-white drop-shadow-md "
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
            />
          </div>
          {/* <input
            type="text"
            className="  form-input w-full m-4 h-10 mt-5 rounded-xl border-white drop-shadow-md "
            placeholder="test"
          /> */}
        </div>
        <div className="flex flex-row justify-between border-r-2 ">
          <div className="flex flex-row ">
            <FontAwesomeIcon
              icon={faCat}
              size="lg"
              style={{ color: "#4C241D" }}
              className="pl-2 pt-7"
            />
            <div className="p-4 pt-6 text-xs">
              <p>จำนวนน้องแมว</p>
              <p>ที่จะเข้าพัก</p>
            </div>
          </div>
          <div className="flex items-center  justify-center text-bb">
            {petNumber}
          </div>
          <div className="grid grid-cols-2 py-6 px-3  w-20 text-white">
            <button
              className="bg-midnight border-r-2 rounded-l-xl cursor-pointer"
              onClick={() => setPetNumber((el) => (el <= 1 ? el : el - 1))}
            >
              -
            </button>
            <button
              className="bg-midnight  rounded-r-xl cursor-pointer"
              onClick={() => setPetNumber((el) => el + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-button btn btn-success border-none text-white rounded-xl  w-11/12 h-12"
            onClick={() =>
              navigate(
                `/search?checkIn=${checkInStr}&checkOut=${checkOutStr}&petNumber=${petNumber}`
              )
            }
          >
            ค้นหาห้องพัก
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkroom;
