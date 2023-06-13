import React from "react";
import PageContainer from "../layouts/PageContainer";
import Headeradmin from "./Headeradmin";
import room from "../image/Room1.png";

function Editroom() {
  return (
    <PageContainer>
      {/* <Headeradmin /> */}
      <div className=" ">
        <div className="p-4">
          <button className="btn btn-secondary">เพิ่มห้องพัก</button>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={room} className="w-60 rounded-xl   drop-shadow-md"></img>
          </div>
          <div className="flex flex-col p-16 gap-4">
            <button className="btn btn-outline btn-warning">
              แก้ไขข้อมูลห้องพัก
            </button>
            <button className="btn btn-outline btn-error">ลบห้องนี้</button>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </PageContainer>
  );
}

export default Editroom;
