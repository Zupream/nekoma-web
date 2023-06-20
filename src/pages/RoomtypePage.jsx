import React, { useEffect } from "react";
import PageContainer from "../layouts/PageContainer";
import typestd from "../image/standard.png";
import roomstd from "../image/stdpic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useRoom } from "../contexts/RoomContext";
import { useBooking } from "../contexts/BookingContext";
import { useAuth } from "../contexts/AuthContext";

function RoomtypePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const checkIn = queryParams.get("checkIn");
  const checkOut = queryParams.get("checkOut");
  const petNumber = queryParams.get("petNumber");

  const { user } = useAuth();
  const { roomId } = useParams();
  // ใช้ดึงพารามที่ลิ้งออกมาใช้
  const values = useRoom();
  const { roomDetail, fetchRoomDetail } = values;
  // console.log(values);
  console.log(roomDetail);

  const bookingValue = useBooking();
  const { createBooking, booking } = bookingValue;

  const inputCreateBooking = { checkIn, checkOut, petNumber, roomId };

  const navigate = useNavigate();
  // console.log(location)
  const handleBooking = async () => {
    const newBookingId = await createBooking(inputCreateBooking);
    navigate(`/payment/${newBookingId}`);
  };

  useEffect(() => {
    fetchRoomDetail(roomId);
  }, []);

  return (
    <PageContainer>
      <div className="bg-background">
        <div className="flex items-center justify-center">
          <img src={roomDetail.typeRoomUrl} className="w-96"></img>
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
              <h1 className="font-bold ">
                Nekoma House - {roomDetail.typeRoom}
              </h1>
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
                Standard ราคา {roomDetail.price} บาท/คืน<br></br> รองรับแมวได้{" "}
                {roomDetail.maxPet} ตัว
              </h1>
            </div>
          </div>
        </div>
        <br></br>
        <div className="px-6 flex justify-between">
          <button
            className="btn btn-outline border-none py-2 w-40 rounded-xl bg-card text-bb drop-shadow-md"
            onClick={() => navigate("/")}
          >
            กลับ
          </button>
          {user ? (
            <button
              onClick={() => handleBooking()}
              className="btn btn-success py-2 w-40 rounded-xl bg-button border-none text-white drop-shadow-md"
            >
              จองห้องนี้
            </button>
          ) : null}
        </div>
        <br></br>
      </div>
    </PageContainer>
  );
}

export default RoomtypePage;
