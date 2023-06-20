import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Card({ img, roomId, queryData }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() =>
        queryData
          ? navigate(
              `/room/${roomId}?checkIn=${queryData?.checkIn}&checkOut=${queryData?.checkOut}&petNumber=${queryData?.petNumber}`
            )
          : navigate(`/room/${roomId}`)
      }
    >
      <img src={img} className="w-72 rounded-xl  mt-4 drop-shadow-md"></img>
    </div>
  );
}

export default Card;
