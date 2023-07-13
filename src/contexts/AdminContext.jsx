import { useState, useContext, createContext } from "react";
import * as adminService from "../api/admin-api";

const AdminContext = createContext(null);

function AdminContextProvider({ children }) {
  const [allBooking, setAllBooking] = useState([]);

  const fetchBookingAdmin = async () => {
    const res = await adminService.fetchBooking();
    setAllBooking(res.data.allBooking);
  };

  const values = { fetchBookingAdmin, allBooking };

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
