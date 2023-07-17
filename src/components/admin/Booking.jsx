import React from "react";
import room from "../../image/Room1.png";
import { useAdmin } from "../../contexts/AdminContext";

function Booking({ booking }) {
  const values = useAdmin();
  const { updateBookingPayment } = values;

  return (
    <div>
      <div className="grid grid-cols-4 ">
        <div className="flex items-center justify-center p-4 ">
          <img
            src={booking.Room.coverUrl}
            className="w-60 rounded-xl   drop-shadow-md"
          ></img>
        </div>
        <div className="grid grid-rows-2 text-center border-l-2">
          <div className="flex flex-col items-center justify-center">
            <p>CheckIn</p>
            <p>{booking.checkIn}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>CheckOut</p>
            <p>{booking.checkOut}</p>
          </div>
        </div>
        <div className=" flex flex-col  items-center justify-around border-l-2">
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn btn-outline btn-warning text-xl w-40 h-14"
            onClick={() => window[booking.id].showModal()}
          >
            Check slip
          </button>
          <dialog id={booking.id} className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-3xl">
                Total price : {booking.totalPrice} ฿
              </h3>
              <p className="py-4">
                {/* ********รูปสลิป****** */}
                <img
                  src={booking.paymentSlip}
                  className="w-60 rounded-xl   drop-shadow-md"
                ></img>
              </p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
          <div>
            <p className="text-lg underline">Special request</p>
            <p className="text-center">{booking.specialRequest}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 border-l-2">
          <button
            className="btn  btn-success w-40"
            onClick={() => updateBookingPayment(booking.id, "CONFIRM")}
          >
            ยืนยันการจอง
          </button>

          <button
            className="btn btn-error w-40"
            onClick={() => updateBookingPayment(booking.id, "REJECT")}
          >
            ไม่ยืนยันการจอง
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Booking;
