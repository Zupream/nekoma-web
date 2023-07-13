import axios from "../config/axios";

export const fetchBooking = () => axios.get("/admin/booking/all");
// export const comfirmStatus =()=> axios.patch(`/status/${bookingId}/${bookingStatus}`)
