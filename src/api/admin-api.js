import { fromJSON } from "postcss";
import axios from "../config/axios";
import { rooms } from "../data/rooms";

export const fetchBooking = () => axios.get("/admin/booking/all");
export const updatePaymentStatus = (bookingId, bookingStatus) =>
  axios.patch(`/admin/status/${bookingId}/${bookingStatus}`);

export const fetchRoomEdit = () => axios.get("/admin/allroom");
export const addRoom = () => axios.post("/admin/add");
export const fetchRoomDetail = (roomId) => axios.get(`/admin/room/${roomId}`);
export const updateImgDetail = (roomId, formData) =>
  axios.patch(`/admin/room/${roomId}/imagesDetail`, formData);
export const updateImgCover = (roomId, formData) =>
  axios.patch(`/admin/room/${roomId}/imagesCover`, formData);
export const updateImgType = (roomId, formData) =>
  axios.patch(`/admin/room/${roomId}/imagesType`, formData);
export const updateDeatil = (roomId, input) =>
  axios.patch(`/admin/room/${roomId}`, input);

export const deleteImgDetail = (imageId) =>
  axios.delete(`/admin/room/image/${imageId}`);
export const deleteRoom = (roomId) => axios.delete(`/admin/delete/${roomId}`);
