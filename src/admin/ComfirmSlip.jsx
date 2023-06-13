import React from "react";
import Headeradmin from "./Headeradmin";
import room from "../image/Room1.png";
import PageContainer from "../layouts/PageContainer";

function ConfirmSlip() {
  return (
    <PageContainer>
      {/* <Headeradmin /> */}
      {/* ****content**** */}
      <div className="grid grid-cols-4 ">
        <div className="flex items-center justify-center p-4 ">
          <img src={room} className="w-60 rounded-xl   drop-shadow-md"></img>
        </div>
        <div className="grid grid-rows-2 text-center border-l-2">
          <div className="flex flex-col items-center justify-center">
            <p>CheckIn</p>
            <p>วันที่เชคอิน mockup</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>CheckOut</p>
            <p>วันที่เชคเอาท์ mockup</p>
          </div>
        </div>
        <div className=" flex items-center justify-center border-l-2">
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn btn-outline btn-warning text-xl w-40 h-14"
            onClick={() => window.my_modal_1.showModal()}
          >
            Check slip
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-3xl">ราคา mockup!</h3>
              <p className="py-4">
                {/* ********รูปสลิป****** */}
                <img
                  src={room}
                  className="w-60 rounded-xl   drop-shadow-md"
                ></img>
              </p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 border-l-2">
          <button className="btn  btn-success w-40">ยืนยันการจอง</button>

          <button className="btn btn-error w-40">ไม่ยืนยันการจอง</button>
        </div>
      </div>
      <hr></hr>
    </PageContainer>
  );
}

export default ConfirmSlip;
