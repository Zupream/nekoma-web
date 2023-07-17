import React, { useRef } from "react";
import PageContainer from "../layouts/PageContainer";
import Headeradmin from "./Headeradmin";
import { useAdmin } from "../contexts/AdminContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

function Detailedit() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const {
    roomIdDetail,
    fetchRoomDetail,
    updateImgDetail,
    updateImgCover,
    updateImgType,
    updateDetail,
    deleteImgDetail,
  } = useAdmin();

  const [editRoomDetail, setEditRoomDetail] = useState({});
  console.log(editRoomDetail);

  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoomDetail(roomId);
  }, []);

  useEffect(() => {
    setEditRoomDetail(roomIdDetail);
  }, [roomIdDetail]);

  const handleUploadCover = () => {
    ref1.current.click();
  };
  const handleUploadType = () => {
    ref2.current.click();
  };
  const handleUploadDetailRoom = () => {
    ref3.current.click();
  };

  const handleOnChangeUploadDetail = (files) => {
    const images = Array.from(files);
    if (!files || images.length <= 0) return;

    const formData = new FormData();

    for (let el of images) {
      formData.append("images", el);
    }

    updateImgDetail(roomId, formData);
  };

  const handleOnChangeCoverImg = (files) => {
    if (!files[0]) return;
    const formData = new FormData();
    formData.append("image", files[0]);
    updateImgCover(roomId, formData);
  };

  const handleOnChangeTypeImg = (files) => {
    if (!files[0]) return;
    const formData = new FormData();
    formData.append("image", files[0]);
    updateImgType(roomId, formData);
  };

  console.log(editRoomDetail);

  const handleSubmitDetail = async () => {
    await updateDetail(roomId, editRoomDetail);
    navigate("/admin/room");
  };

  const handleDeleteImgDetail = (e, imageId) => {
    e.stopPropagation();
    deleteImgDetail(imageId, roomId);
  };

  return (
    <PageContainer>
      {/* <Headeradmin /> */}
      <div className="grid grid-rows-5 gap-1">
        <div
          className="flex items-center justify-center flex-col bg-slate-200 pb-4 mt-4 cursor-pointer"
          onClick={handleUploadCover}
        >
          {roomIdDetail.coverUrl ? (
            <div className="flex items-center justify-center pt-4">
              <img src={roomIdDetail.coverUrl} className="w-60 h-60  " />
            </div>
          ) : (
            <>
              <a className="font-medium text-9xl">+</a>
              <p>เปลี่ยนภาพปกห้อง(มีได้แค่รูปเดียว)</p>
            </>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          ref={ref1}
          onChange={(e) => handleOnChangeCoverImg(e.target.files)}
        />
        <div>
          <div
            className="flex items-center justify-center flex-col bg-slate-200 pb-4 mt-4 cursor-pointer "
            onClick={handleUploadType}
          >
            {roomIdDetail.typeRoomUrl ? (
              <img src={roomIdDetail.typeRoomUrl} className="" />
            ) : (
              <>
                <a className="font-medium text-9xl">+</a>
                <p>เปลี่ยนภาพไทป์ห้อง(มีได้แค่รูปเดียว)</p>
              </>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            ref={ref2}
            onChange={(e) => handleOnChangeTypeImg(e.target.files)}
          />
        </div>

        <div className="row-span-2">
          <div
            className={`flex   ${
              Object.keys(roomIdDetail).length > 0 &&
              roomIdDetail.RoomImgs.length > 0
                ? "flex-row justify-start items-start"
                : "flex-col justify-center items-center"
            } flex-wrap  bg-slate-200 h-full gap-4 p-2  mt-4 cursor-pointer`}
            onClick={handleUploadDetailRoom}
          >
            {Object.keys(roomIdDetail).length > 0 &&
            roomIdDetail.RoomImgs.length > 0 ? (
              roomIdDetail.RoomImgs.map((el) => {
                return (
                  <div key={el.id} className="relative">
                    <img src={el.urlImg} className="w-60" />
                    <span
                      className="absolute top-2 right-2 bg-white bg-opacity-60 p-1 rounded-full"
                      onClick={(e) => handleDeleteImgDetail(e, el.id)}
                    >
                      <BiTrash />
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="text-center ">
                <a className="font-medium  text-9xl">+</a>
                <p>เพิ่มภาพรายละเอียดห้อง</p>
              </div>
            )}
          </div>
          <input
            type="file"
            multiple
            className="hidden"
            ref={ref3}
            onChange={(e) => handleOnChangeUploadDetail(e.target.files)}
          />
        </div>
        <div className="pt-4">
          <textarea
            type="text"
            placeholder="รายละเอียดห้อง.."
            className="textarea textarea-bordered input-lg w-full h-full "
            value={editRoomDetail.roomDetail ? editRoomDetail.roomDetail : null}
            onChange={(e) =>
              setEditRoomDetail((el) => ({
                ...el,
                roomDetail: e.target.value,
              }))
            }
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p>Type room</p>
            <input
              type="text"
              placeholder="Type room..."
              className="input input-bordered input-lg w-full h-full"
              value={editRoomDetail.typeRoom}
              onChange={(e) =>
                setEditRoomDetail((el) => ({ ...el, typeRoom: e.target.value }))
              }
            />
          </div>
          <div>
            <p>Max pet</p>
            <input
              type="text"
              placeholder="Max pet/room..."
              className="input input-bordered input-lg w-full h-full"
              value={editRoomDetail.maxPet}
              onChange={(e) =>
                setEditRoomDetail((el) => ({ ...el, maxPet: e.target.value }))
              }
            />
          </div>
          <div>
            <p>Price</p>
            <input
              type="text"
              placeholder="Price/room..."
              className="input input-bordered input-lg w-full h-full"
              value={editRoomDetail.price}
              onChange={(e) =>
                setEditRoomDetail((el) => ({ ...el, price: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-row gap-4">
        <div>
          <button
            className="btn btn-warning w-40"
            onClick={() => handleSubmitDetail()}
          >
            บันทึก
          </button>
        </div>
        <div>
          <Link to="/admin/room">
            <button className="btn btn-error w-40">ละทิ้ง</button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}

export default Detailedit;
