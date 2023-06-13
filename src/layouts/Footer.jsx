import React from "react";
import PageContainer from "./PageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="h-32 bg-midnight flex ">
      <PageContainer>
        <div className="flex flex-row justify-center text-white pt-6">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="h-8 text-center"
            />
            <div className="text-center">Nekoma House - Cat Hotel</div>
            <div className="text-center text-xs">
              © 2023 Nekoma House. All rights reserved
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Footer;
