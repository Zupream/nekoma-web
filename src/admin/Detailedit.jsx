import React, { useRef } from "react";
import PageContainer from "../layouts/PageContainer";
import Headeradmin from "./Headeradmin";

function Detailedit() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleUploadCover = () => {
    ref1.current.click();
  };
  const handleUploadType = () => {
    ref2.current.click();
  };
  const handleUploadDetailRoom = () => {
    ref3.current.click();
  };

  return (
    <PageContainer>
      {/* <Headeradmin /> */}
      <div className="grid grid-rows-5 gap-4">
        <div
          className="flex items-center justify-center flex-col bg-slate-200 pb-4 mt-4 cursor-pointer"
          onClick={handleUploadCover}
        >
          <a className="font-medium text-9xl">+</a>
          <p>เปลี่ยนภาพปกห้อง(มีได้แค่รูปเดียว)</p>
        </div>
        <input type="file" className="hidden" ref={ref1} />
        <div>
          <div
            className="flex items-center justify-center flex-col bg-slate-200 pb-4 mt-4 cursor-pointer "
            onClick={handleUploadType}
          >
            <a className="font-medium text-9xl">+</a>
            <p>เปลี่ยนภาพไทป์ห้อง(มีได้แค่รูปเดียว)</p>
          </div>
          <input type="file" className="hidden" ref={ref2} />
        </div>

        <div className="row-span-2">
          <div
            className="flex items-center justify-center flex-col bg-slate-200 h-full  mt-4 cursor-pointer"
            onClick={handleUploadDetailRoom}
          >
            <a className="font-medium text-9xl">+</a>
            <p>เพิ่มภาพรายละเอียดห้อง</p>
          </div>
          <input type="file" multiple className="hidden" ref={ref3} />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="รายละเอียดห้อง.."
            className="input input-bordered input-lg w-full h-full"
          />
        </div>
        <div className="h-32">
          <input
            type="text"
            placeholder="รายละเอียดราคาและจำนวนแมวที่รับได้....."
            className="input input-bordered input-lg w-full h-full"
          />
        </div>
      </div>
      <div className="p-8 flex flex-row gap-4">
        <div>
          <button className="btn btn-warning w-40">บันทึก</button>
        </div>
        <div>
          <button className="btn btn-error w-40">ละทิ้ง</button>
        </div>
      </div>
    </PageContainer>
  );
}

export default Detailedit;
