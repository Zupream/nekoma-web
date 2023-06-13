import React from "react";

function ServiceCardContainer({ children }) {
  return (
    <div className="grid  grid-cols-3 xl:grid-cols-5 gap-4 ">{children}</div>
  );
}

export default ServiceCardContainer;
