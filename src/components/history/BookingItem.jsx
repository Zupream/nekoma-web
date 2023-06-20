import React from "react";
import Room from "../../image/Room1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCat,
  faCalendar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function BookingItem({ booking }) {
  console.log({ booking });
  return (
    <>
      <div className="grid grid-cols-5 ">
        <div className="flex items-center justify-center">
          <img
            src={booking?.Room.coverUrl}
            className=" w-44 rounded-xl  m-4 drop-shadow-md"
          ></img>
        </div>
        <div className="">
          <div className="flex flex-row p-4 pt-8 items-end">
            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ color: "#4C241D" }}
                className="p-4 pb-8 "
              />
            </div>
            <div>
              <div className="pl-2 text-lg  text-bb ">เช็คอิน</div>
              <div className="pl-2 text-base pb-3 text-bb ">
                {booking.checkIn}
              </div>
            </div>
          </div>
          <div className="flex flex-row p-4  items-end">
            <div>
              <FontAwesomeIcon
                icon={faCalendar}
                size="lg"
                style={{ color: "#4C241D" }}
                className="p-4 pb-8 "
              />
            </div>
            <div>
              <div className="pl-2 text-lg  text-bb ">จำนวนวันที่เข้าพัก</div>
              <div className="pl-2 text-base pb-3 text-bb ">
                :{booking.totalDay}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row p-4 pt-8 items-end ">
            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ color: "#4C241D" }}
                className="p-4 pb-8 "
              />
            </div>
            <div>
              <div className="pl-2 text-lg  text-bb ">เช็คเอาท์</div>
              <div className="pl-2 text-base pb-3 text-bb ">
                {booking.checkOut}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row p-4  items-end">
              <div>
                <FontAwesomeIcon
                  icon={faCat}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="p-4 pb-8 "
                />
              </div>
              <div>
                <div className="pl-2 text-lg  text-bb ">จำนวนแมวที่เข้าพัก</div>
                <div className="pl-2 text-base pb-3 text-bb ">
                  :{booking.amountPet}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-4 pt-8 items-start">
          <div>
            <FontAwesomeIcon
              icon={faDollarSign}
              size="lg"
              style={{ color: "#4C241D" }}
              className="p-4 pb-8 "
            />
          </div>
          <div className="pt-4"> จำนวนเงิน : {booking.totalPrice}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* <div className="flex items-start justify-center">สถานะ : </div> */}
          <div
            className={`${
              booking.paymentStatus === "PENDING"
                ? "bg-button"
                : booking.paymentStatus === "CONFIRM"
                ? "bg-regis"
                : "bg-red-600"
            } p-4 px-12 border-none text-white rounded-md`}
          >
            {booking.paymentStatus}
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default BookingItem;
