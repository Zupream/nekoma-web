import React from "react";

function Card({ img }) {
  return (
    <div className=" ">
      <img src={img} className="w-72 rounded-xl  mt-4 drop-shadow-md"></img>
    </div>
  );
}

export default Card;
