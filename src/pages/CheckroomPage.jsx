import React, { useEffect } from "react";
import PageContainer from "../layouts/PageContainer";
import Checkroom from "../layouts/Checkroom";
import RoomCardContainer from "../components/common/RoomCardContainer";

import Card from "../components/common/Card";
import { useLocation } from "react-router-dom";
import { useBooking } from "../contexts/BookingContext";
function CheckroomPage() {
  const location = useLocation();
  //useLocation เป็นฟังชั่นของรีแอคเร้าเตอร์ดอม

  console.log(location);

  // console.log({ location });
  const searchParams = new URLSearchParams(location.search);
  // URLSearchParams แปลงคิวรี่ให้เป็นออปเจค
  const values = useBooking();

  const { searchRooms, rooms } = values;

  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const petNumber = searchParams.get("petNumber");

  // console.log({ checkIn, checkOut });

  useEffect(() => {
    searchRooms(checkIn, checkOut, petNumber);
  }, [location]);

  const dateObject = {
    checkIn,
    checkOut,
    petNumber,
  };

  return (
    <PageContainer>
      <div className="grid place-items-center bg-background  h-[calc(100vh-12rem)]">
        <div className="flex items-start ">
          <Checkroom dateObject={dateObject} />
        </div>
        <div className="pb-8">
          <RoomCardContainer>
            {rooms
              ? rooms.map((el, idx) => (
                  <Card
                    key={el.id}
                    img={el.coverUrl}
                    roomId={el.id}
                    queryData={dateObject}
                  />
                ))
              : null}
          </RoomCardContainer>
        </div>
      </div>
    </PageContainer>
  );
}

export default CheckroomPage;
