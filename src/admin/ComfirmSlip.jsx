import React from "react";
import PageContainer from "../layouts/PageContainer";
import Booking from "../components/admin/Booking";
import { useEffect } from "react";
import { useAdmin } from "../contexts/AdminContext";

function ConfirmSlip() {
  const values = useAdmin();
  const { fetchBookingAdmin, allBooking } = values;

  useEffect(() => {
    fetchBookingAdmin();
  }, []);

  return (
    <PageContainer>
      {allBooking.map((el) => (
        <Booking booking={el} />
      ))}
    </PageContainer>
  );
}

export default ConfirmSlip;
