import React from "react";
import PageContainer from "../layouts/PageContainer";
import typestd from "../image/standard.png";
import roomstd from "../image/stdpic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function RoomtypePage() {
  return (
    <PageContainer>
      <div className="bg-background">
        <div className="flex items-center justify-center">
          <img src={typestd} className="w-96"></img>
        </div>
        <div className="flex items-center justify-center ">
          <img src={roomstd}></img>
        </div>
        <div className="flex flex-row pt-10 text-bb pl-6">
          <FontAwesomeIcon icon={faHouse} />
          <div className="pl-2">รายละเอียดห้องพัก</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <div className="text-bb pt-2 pl-6">
              <h1 className="font-bold ">Nekoma House - Standard Type</h1>
              <ul>
                <li> กล้องวงจรปิดดูและพูดคุยกับน้องได้ตลอด 24 ชม </li>
                <li>
                  พื้นที่ส่วนกลางให้น้องแมวเดินเล่น ผ่อนคลาย
                  พร้อมถ่ายภาพรายงานให้เจ้าของหายคิดถึง
                </li>
                <li>
                  มีจุดให้ปีนป่าย มีวิวธรรมชาติ ทั้งระเบียงให้ส่องนก
                  และตู้ปลาให้ส่องพี่ปลา ~
                </li>
                <li>ชามอาหาร และน้ำสะอาดผ่านการกรองด้วยระบบ RO</li>
                <li>เปิด Cat Calming Music ให้น้องๆฟังกันทั้งวัน</li>
              </ul>
              <br></br>

              <li>ห้องพักเป็นแบบแยก ไม่ปะปนกับบ้านอื่น ระบบปิด ของเล่นเพียบ</li>
              <li>เปิดแอร์ 24 ชม. พร้อมเครื่องฟอกอากาศ </li>
              <li>
                ดูแลอย่างอบอุ่นโดยพี่เลี้ยงที่รักและเข้าใจพฤติกรรมน้องแมวเป็นอย่างดี
                ให้เหล่าทาส/ผู้ปกครองได้เที่ยวอย่างสบายใจหายห่วง
              </li>
              <li>พาน้องแมวเดินเล่น3ครั้งต่อวัน </li>
              <li>
                ทำความสะอาดฆ่าเชื้อก่อน-หลัง รับบริการ ทุกครั้ง
                เพื่อความปลอดภัยกับลูกค้าทุกท่าน
              </li>
            </div>
          </div>
          <div className="pr-6 text-center text-bb font-medium">
            <div className=" bg-midnight h-fit border-2 rounded-xl p-2">
              <h1>
                Standard ราคา 250 บาท/คืน<br></br> รองรับแมวได้ 1 ตัว
              </h1>
            </div>
          </div>
        </div>
        <br></br>
        <div className="px-6 flex justify-between">
          <button className="btn btn-outline border-none py-2 w-40 rounded-xl bg-card text-bb drop-shadow-md">
            กลับ
          </button>
          <button className="btn btn-success py-2 w-40 rounded-xl bg-button border-none text-white drop-shadow-md">
            จองห้องนี้
          </button>
        </div>
        <br></br>
      </div>
    </PageContainer>
  );
}

export default RoomtypePage;
