import React from "react";
import { Link } from "react-router-dom";
import { useAdmin } from "../../contexts/AdminContext";

function RoomForEdit({ room }) {
  const { deleteRoom } = useAdmin();

  return (
    <div>
      <div className="p-2 ">
        <div className="flex flex-row ">
          <div>
            <img
              src={room.coverUrl}
              className="w-60 rounded-xl   drop-shadow-md"
            ></img>
          </div>
          <div className="flex flex-col p-16 gap-4">
            <Link to={`/admin/edit/${room.id}`}>
              <button className="btn btn-outline btn-warning">
                แก้ไขข้อมูลห้องพัก
              </button>
            </Link>
            <button
              className="btn btn-outline btn-error"
              onClick={() => deleteRoom(room.id)}
            >
              ลบห้องนี้
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </div>
  );
}

export default RoomForEdit;
