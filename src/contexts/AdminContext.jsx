import { useState, useContext, createContext } from "react";
import * as adminService from "../api/admin-api";

const AdminContext = createContext(null);

function AdminContextProvider({ children }) {
  const [allBooking, setAllBooking] = useState([]);
  const [roomEdit, setRoomEdit] = useState([]);
  const [roomIdDetail, setRoomIdDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchBookingAdmin = async () => {
    const res = await adminService.fetchBooking();
    setAllBooking(res.data.allBooking);
  };

  const updateBookingPayment = async (bookingId, bookingStatus) => {
    await adminService.updatePaymentStatus(bookingId, bookingStatus);
    fetchBookingAdmin();
  };

  const fetchRoomEdit = async () => {
    const res = await adminService.fetchRoomEdit();
    setRoomEdit(res.data.allRoom);
  };
  const fetchRoomDetail = async (roomId) => {
    const res = await adminService.fetchRoomDetail(roomId);
    setRoomIdDetail(res.data.room);
  };

  const createRoom = async () => {
    const res = await adminService.addRoom();
    fetchRoomDetail(res.data.room.id);
    return res.data.room.id;
  };

  const updateImgDetail = async (roomId, formData) => {
    try {
      setLoading(true);
      await adminService.updateImgDetail(roomId, formData);
      fetchRoomDetail(roomId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateImgCover = async (roomId, formData) => {
    try {
      setLoading(true);
      await adminService.updateImgCover(roomId, formData);
      fetchRoomDetail(roomId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const updateImgType = async (roomId, formData) => {
    try {
      setLoading(true);
      await adminService.updateImgType(roomId, formData);
      fetchRoomDetail(roomId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateDetail = async (roomId, input) => {
    await adminService.updateDeatil(roomId, input);
    fetchRoomDetail(roomId);
  };

  const deleteImgDetail = async (imageId, roomId) => {
    await adminService.deleteImgDetail(imageId);
    fetchRoomDetail(roomId);
  };

  const deleteRoom = async (roomId) => {
    await adminService.deleteRoom(roomId);
    fetchRoomEdit();
  };

  const values = {
    fetchBookingAdmin,
    allBooking,
    updateBookingPayment,
    fetchRoomEdit,
    roomEdit,
    createRoom,
    fetchRoomDetail,
    roomIdDetail,
    updateImgDetail,
    updateImgCover,
    updateImgType,
    updateDetail,
    deleteImgDetail,
    deleteRoom,
    loading,
  };

  return (
    <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
  );
}

export default AdminContextProvider;

export const useAdmin = () => {
  const ctx = useContext(AdminContext);

  if (!ctx) {
    throw new Error("useAdmin must be used within a AdminContectProvider");
  }

  return ctx;
};
