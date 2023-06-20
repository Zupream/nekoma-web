import axios from "../config/axios";

// export const getAllRooms = () => axios.get("/room/all");
// export const getRoomDetailById = (roomId) =>
//   axios.get(`/room/detail/${roomId}`);
// export const getSearchRoom = (checkIn, checkOut, petNumber) =>
//   axios.get(
//     `/room/all?checkIn=${checkIn}&checkOut=${checkOut}&petNumber=${petNumber}`
//   );
export const createBooking = (values) => axios.post("/booking", values);
export const getBookingById = (bookingId) =>
  axios.get(`/booking/detail/${bookingId}`);
export const uploadSlip = (bookingId, values) =>
  axios.patch(`/booking/slip/${bookingId}`, values);
export const deleteBooking = (bookingId) =>
  axios.delete(`/booking/${bookingId}`);
export const getMyBooking = () => axios.get("/booking/myBooking");
