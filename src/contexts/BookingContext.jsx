import { createContext, useContext, useState } from "react";
import * as roomService from "../api/room-api";

const BookingContext = createContext(null);

function BookingContextProvider({ children }) {
  //   const [checkIn, setCheckIn] = useState(new Date());
  //   const [checkOut, setCheckOut] = useState(new Date());
  //   const [petNumber, setPetNumber] = useState(1);
  const [rooms, setRooms] = useState(null);

  //   const test = () => {
  //     console.log("test");
  //   };
  //   const values = { test };
  const searchRooms = async (checkIn, checkOut, petNumber) => {
    const res = await roomService.getSearchRoom(checkIn, checkOut, petNumber);
    setRooms(res.data.rooms);
  };

  const values = { searchRooms, rooms };

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
