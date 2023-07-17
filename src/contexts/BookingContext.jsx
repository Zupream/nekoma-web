import { createContext, useContext, useState } from "react";
import * as roomService from "../api/room-api";
import * as bookingService from "../api/booking-api";

const BookingContext = createContext(null);

function BookingContextProvider({ children }) {
  //   const [checkIn, setCheckIn] = useState(new Date());
  //   const [checkOut, setCheckOut] = useState(new Date());
  //   const [petNumber, setPetNumber] = useState(1);
  const [rooms, setRooms] = useState(null);

  const [booking, setBooking] = useState(null);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const test = () => {
  //     console.log("test");
  //   };
  //   const values = { test };
  const searchRooms = async (checkIn, checkOut, petNumber) => {
    const res = await roomService.getSearchRoom(checkIn, checkOut, petNumber);
    setRooms(res.data.rooms);
  };

  const fetchBookingDetail = async (bookingId) => {
    const res = await bookingService.getBookingById(bookingId);
    setBooking(res.data.booking);
  };

  const getMyBooking = async () => {
    const res = await bookingService.getMyBooking();
    setMyBookings(res.data.myBooking);

    console.log(res.data);
  };

  const deleteBooking = async (bookingId) => {
    await bookingService.deleteBooking(bookingId);
  };

  const createBooking = async (values) => {
    const res = await bookingService.createBooking(values);
    const newBookingId = res.data.booking.id;

    await fetchBookingDetail(newBookingId);
    getMyBooking();

    return newBookingId;
  };

  const updatePayment = async (bookingId, slip, request) => {
    try {
      setLoading(true);
      if (slip.length < 1) return;
      const slipArray = Array.from(slip);

      const formData = new FormData();
      formData.append("image", slipArray[0]);
      formData.append("specialRequest", request);
      await bookingService.uploadSlip(bookingId, formData);
      await fetchBookingDetail(bookingId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const values = {
    searchRooms,
    rooms,
    createBooking,
    booking,
    fetchBookingDetail,
    updatePayment,
    getMyBooking,
    myBookings,
    deleteBooking,
    loading,
  };

  return (
    <BookingContext.Provider value={values}>{children}</BookingContext.Provider>
  );
}

export default BookingContextProvider;

// const {values} = useContext(AuthContext)
// values.test()

export const useBooking = () => {
  const ctx = useContext(BookingContext);

  console.log(ctx);

  if (!ctx) {
    throw new Error("useAuth must be used within a BookingContextProvider");
  }

  return ctx;
};
