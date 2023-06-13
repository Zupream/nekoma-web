import React from "react";

function RoomCardContainer({ children }) {
  return (
    <div className="grid  grid-cols-3 xl:grid-cols-4 gap-4 ">{children}</div>
  );
}

export default RoomCardContainer;
