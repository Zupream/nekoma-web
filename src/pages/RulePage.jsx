import React from "react";
import PageContainer from "../layouts/PageContainer";
import conditionCover from "../image/condition.jpg";
function RulePage() {
  return (
    <PageContainer>
      <div className=" bg-background  h-[calc(100vh-12rem)]">
        <div className="bg-card text-center py-4 text-bb font-medium">
          กฎระเบียบและเงื่อนไขการเข้าพัก
        </div>
        <div className="flex items-center justify-center">
          <img src={conditionCover} className="px-20 pt-20 pb-16 w-3/6"></img>
        </div>
        <div className="text-center">
          <input
            type="checkbox"
            //   checked="checked"
            className="checkbox checkbox-accent border-none"
          />
          <span className="label-text pl-2">
            ยอมรับกฎระเบียบและเงื่อนไขการเข้าพัก
          </span>
        </div>
        <div className="px-6 py-4 flex items-center justify-center gap-4">
          <button className="btn btn-outline border-none py-2 w-40 rounded-xl bg-card text-bb drop-shadow-md">
            กลับ
          </button>
          <button className="btn btn-success border-none py-2 w-40 rounded-xl bg-button  text-white drop-shadow-md">
            จองห้องนี้
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default RulePage;
