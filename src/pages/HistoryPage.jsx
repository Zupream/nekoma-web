import React, { useEffect } from "react";
import PageContainer from "../layouts/PageContainer";
import { useBooking } from "../contexts/BookingContext";
import BookingItem from "../components/history/BookingItem";

function HistoryPage() {
  const values = useBooking();
  const { myBookings, getMyBooking } = values;

  useEffect(() => {
    getMyBooking();
  }, []);
  console.log(myBookings);
  return (
    <PageContainer>
      <div className=" bg-background  h-[calc(100vh-12rem)] overflow-scroll">
        <div className="bg-card text-center py-4 text-bb font-medium">
          การจอง
        </div>
        {myBookings.map((el) => (
          <BookingItem booking={el} />
        ))}

        <hr></hr>
      </div>
    </PageContainer>
  );
}

export default HistoryPage;
