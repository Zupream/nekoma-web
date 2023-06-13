import React from "react";
import PageContainer from "../layouts/PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function SuccessPage() {
  return (
    <PageContainer>
      <div className=" bg-background  h-[calc(100vh-12rem)]">
        <div className="bg-card text-center py-4 flex flex-row items-center justify-center text-bb font-medium">
          <FontAwesomeIcon icon={faClock} size="lg" className="pr-2" />
          <div>
            <p>การจองของคุณกำลังรอการตรวจสอบ และจะได้รับการยืนยันภายใน</p>
            <p>3 - 6 ชั่วโมง โดยสามารถเช็คสถานะการจองได้ผ่านแถบการจอง</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <p className="text-bb text-9xl pb-40">Thank you.</p>
        </div>
      </div>
    </PageContainer>
  );
}

export default SuccessPage;
