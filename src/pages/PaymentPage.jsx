import React from "react";
import PageContainer from "../layouts/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCat,
  faCalendar,
  faDollarSign,
  faAddressCard,
  faUser,
  faPenToSquare,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Room from "../image/Room1.png";
import qr from "../image/QR.png";

function PaymentPage() {
  return (
    <PageContainer>
      <div className="bg-card text-center py-4 text-bb ">
        <ul>
          <li className="font-medium text-xl">คำขอจอง</li>
          <li>...โปรดทำการชำระเงินภายใน15นาทีหลังทำการจอง...</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 bg-background">
        <div className="p-8">
          <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 border-2 py-8 px-8  rounded-xl">
            <div className="flex flex-row border-r-2 border-b-2 p-2  items-center ">
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
                  วันที่ mockup
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center p-2  border-b-2">
              <div>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="p-4  pb-8 "
                />
              </div>
              <div className="pl-1">
                <div className="pl-2 text-lg  text-bb ">เช็คเอาท์</div>
                <div className="pl-2 text-base pb-3 text-bb ">
                  วันที่ mockup
                </div>
              </div>
            </div>
            <div className="flex flex-row p-2 items-center  pt-8 border-r-2">
              <div>
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="p-4 pb-8 "
                />
              </div>
              <div>
                <div className="pl-2 text-lg  text-bb ">จำนวนวัน</div>
                <div className="pl-2 text-base pb-3 text-bb ">:mockup</div>
              </div>
            </div>
            <div className="flex flex-row pt-8 p-2 items-center">
              <div>
                <FontAwesomeIcon
                  icon={faCat}
                  size="lg"
                  style={{ color: "#4C241D" }}
                  className="p-4 pb-8 "
                />
              </div>
              <div>
                <div className="pl-2 text-lg  text-bb ">จำนวนแมว</div>
                <div className="pl-2 text-base pb-3 text-bb ">
                  :จำนวน mockup
                </div>
              </div>
            </div>
          </div>
          {/* ************contact */}
          <br></br>
          <div className="grid grid-cols-1 bg-background border-2  rounded-xl  ">
            <div className="flex flex-col p-8">
              <div className="flex flex-row pb-5">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  size="xl"
                  style={{ color: "#4C241D" }}
                  className="pt-1"
                />
                <h1 className="p-1 font-medium text-lg text-bb">
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
                    <div>
                      <p>Detail database </p>
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
                    <div>
                      <p>Detail database แก้ไขได้</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div>
                <div>
                  <div className="flex flex-row py-4">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="lg"
                      style={{ color: "#4C241D" }}
                      className="pt-2 pr-2"
                    />
                    <div className="text-bb w-11/12 ">
                      <p className="text-lg">มีคำขอพิเศษหรือไม่</p>
                      <div className="pt-4">
                        <input
                          type="text"
                          className="  form-input w-full h-12 rounded-xl border-white  "
                          placeholder="กรุณากรอกคำขอพิเศษหรือข้อมูลที่ท่านต้องการเปลี่ยนชั่วคราว"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          {/* *************รายละเอียดการชำระเงิน */}
          <div className="grid grid-cols-1  bg-background border-2  rounded-xl ">
            <div className="flex flex-col p-8">
              <div className="flex flex-row pb-6">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size="xl"
                  style={{ color: "#4C241D" }}
                  className=" pr-2"
                />
                <p className=" font-medium text-lg text-bb">
                  รายละเอียดการชำระเงิน
                </p>
              </div>
              <hr></hr>
              <div className="text-center p-4 text-bb">
                <p>กรุณาชำระเงินผ่าน QR Code ภายใน 15 นาที</p>
                <p>(หากเกิน 15 นาทีแล้วจะต้องทำรายการใหม่</p>
              </div>
              <div className="flex items-center justify-center">
                <img src={qr} className="w-52"></img>
              </div>
              <div className="text-center p-4 text-bb text-lg ">
                <p>จำนวนเงิน : Mockup</p>
              </div>
            </div>
          </div>
          <br></br>
          <div>
            <div className="grid grid-cols-1  bg-background border-2  rounded-xl ">
              <div className="flex flex-col p-8">
                <div className="flex flex-row pb-6">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    size="xl"
                    style={{ color: "#4C241D" }}
                    className=" pr-2"
                  />
                  <p className=" font-medium text-lg text-bb">
                    ยืนยันการชำระเงิน
                  </p>
                </div>
                <hr></hr>
                <div className="flex items-center justify-center pt-8">
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                  />
                </div>
                <div className="p-4 pt-8">
                  <p>วันที่โอน</p>
                  <p>mockup</p>
                </div>
                <div className="p-4 pb-8">
                  <p>เวลาที่โอน</p>
                  <p>mockup</p>
                </div>
                <div className="flex justify-around">
                  <button className="btn btn-warning">ยืนยันการชำระเงิน</button>
                  <button className="btn btn-error">ยกเลิกการจอง</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row text-bb p-4">
            <FontAwesomeIcon icon={faClock} size="lg" />
            <p className="pl-2">
              การจองของคุณกำลังรอการตรวจสอบ และจะได้รับการยืนยันภายใน 3 - 6
              ชั่วโมง โดยสามารถเช็คสถานะการจองได้ผ่านแถบการจอง
            </p>
          </div>
        </div>
        <div className="p-8  ">
          <div className="rounded-xl border-2">
            <div className="grid grid-cols-2 rounded-xl  ">
              <div className="p-4">
                <img src={Room} className="w-full rounded-xl"></img>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center text-bb text-sm font-normal">
                  <div className=" bg-midnight h-fit rounded-xl w-52  p-2">
                    <h1>
                      Standard ราคา 250 บาท/คืน<br></br> รองรับแมวได้ 1 ตัว
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <hr></hr>
            </div>
            <div className="text-bb p-4">
              <h1 className="text-xl pb-4">รายละเอียดราคา</h1>
              <p>ราคาห้อง __(mockup ชื่อห้อง)__</p>
              <div className="flex flex-row justify-between ">
                <p>คำนวน (฿550 x 2 วัน)</p>
                <p>฿1,100 mockup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default PaymentPage;
