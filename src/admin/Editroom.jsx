import React from "react";
import PageContainer from "../layouts/PageContainer";
import Headeradmin from "./Headeradmin";
import room from "../image/Room1.png";
import { useAdmin } from "../contexts/AdminContext";
import { useEffect } from "react";
import RoomForEdit from "../components/admin/RoomForEdit";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Editroom() {
  const values = useAdmin();
  const { fetchRoomEdit, roomEdit, createRoom } = values;
  const navigate = useNavigate();
  const handleCreateRoom = async () => {
    const newRoomId = await createRoom();
    navigate(`/admin/edit/${newRoomId}`);
    // navigate(`/admin/edit/1`);
  };

  useEffect(() => {
    fetchRoomEdit();
  }, []);

  return (
    <PageContainer>
      <div className="p-4">
        <button
          className="btn btn-secondary"
          onClick={() => handleCreateRoom()}
        >
          เพิ่มห้องพัก
        </button>
      </div>
      {roomEdit.map((el) => (
        <RoomForEdit key={el.id} room={el} />
      ))}
    </PageContainer>
  );
}

export default Editroom;
