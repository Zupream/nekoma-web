import axios from "../config/axios";

export const getAllRooms = () => axios.get("/room/all");
export const getRoomDetailById = () => axios.get("/room/detail/:roomId");
export const getSearchRoom = (checkIn, checkOut, petNumber) =>
  axios.get(
    `/room/all?checkIn=${checkIn}&checkOut=${checkOut}&petNumber=${petNumber}`
  );
