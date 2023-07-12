import React, { useEffect } from "react";
import PageContainer from "../layouts/PageContainer";
import picHome from "../image/Home.png";
// import Room1 from "../image/Room1.png";
// import Room2 from "../image/Room2.png";
// import Room3 from "../image/Room3.png";
// import Room4 from "../image/Room4.png";
// import Room5 from "../image/Room5.png";
// import Room6 from "../image/Room6.png";
// import Room7 from "../image/Room7.png";
import service1 from "../image/service1.png";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import service5 from "../image/service5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHeart,
  faCalendarDays,
  faCat,
} from "@fortawesome/free-solid-svg-icons";
import Checkroom from "../layouts/Checkroom";
import RoomCardContainer from "../components/common/RoomCardContainer";
import Card from "../components/common/Card";
import ServiceCardContainer from "../components/home/ServiceCardContainer";
// const rooms = [Room1, Room2, Room3, Room4, Room5, Room6, Room7];
import { rooms } from "../data/rooms";
import { useRoom } from "../contexts/RoomContext";

function HomePage() {
  const values = useRoom();
  const { allRooms } = values;

  return (
    <PageContainer>
      <div className="bg-background ">
        <div className="overflow-y-auto">
          <div>
            <img src={picHome} className="object-cover w-full"></img>
          </div>
          {/* ***************** */}
          <Checkroom />
          {/* ***************** */}
          <div className="flex flex-row pt-4 drop-shadow-lg">
            <FontAwesomeIcon
              icon={faHouse}
              className="pr-2 pb-1 my-auto text-bb pl-4"
            />
            <div className="text-bb font-medium">ห้องพักทั้งหมด</div>
          </div>
          {/* *****Detail room***** */}
          <div className="flex flex-col justify-center  items-stretch px-8 pb-16">
            <RoomCardContainer>
              {allRooms.map((el, idx) => (
                <Card key={el.id} img={el.coverUrl} roomId={el.id} />
              ))}
            </RoomCardContainer>
          </div>
        </div>
        {/* ********end detail staer service****** */}

        {/* </div> */}
      </div>
    </PageContainer>
  );
}

export default HomePage;

// <div className="flex flex-row pt-4 drop-shadow-lg">
//           <FontAwesomeIcon icon={faHeart} className="pr-2 pb-1 text-bb pl-4" />
//           <div className="text-bb font-medium">
//             เกี่ยวกับโรงแรมและบริการของเรา
//           </div>
//         </div>
//         {/* <FontAwesomeIcon icon={faHouse} className="pr-2" /> */}
//         {/* <div className="flex flex-row justify-between flex-wrap text-bb px-4"> */}
//         <ServiceCardContainer>
//           <div>
//             <div className="flex justify-center">
//               <img src={service1} className="w-48 h-48 "></img>
//             </div>
//             <div className="text-center text-xs">
//               <h6>ท่านสามารถสมัครสมาชิกเพื่อ</h6>
//               <h6>รับข่าวสารและโปรโมชั่นที่คุ้มค่า</h6>
//               <h6>สำหรับเหล่าน้องแมวของท่านได้</h6>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-center">
//               <img src={service2} className="w-58 h-48"></img>
//             </div>
//             <div className="text-center text-xs pt-1">
//               <h6>โรงแรมตั้งอยู่ใจกลางเมืองง่ายต่อ</h6>
//               <h6>การรับส่งน้องแมวของท่าน</h6>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-center">
//               <img src={service3} className="w-48 h-46"></img>
//             </div>
//             <div className="text-center text-xs">
//               <h6>มีห้องหลากหลายขนาดเพื่อตอบโจทย์</h6>
//               <h6>ความต้องการของลูกค้าที่ต่างกันและมี</h6>
//               <h6>ห้องขนาดใญ่เพื่อรองรับน้องแมว</h6>
//               <h6>จากครอบครัวเดียวกันได้</h6>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-center">
//               <img src={service4} className="w-48"></img>
//             </div>
//             <div className="text-center text-xs">
//               <h6>มีบริการกล้องวงจรปิด</h6>
//               <h6>ที่สามารถเชื่อมต่อกับ Smart Phone</h6>
//               <h6>ให้เจ้าของได้ดูน้องแมวยามคิดถึง</h6>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-center">
//               <img src={service5} className="w-56 h-48"></img>
//             </div>
//             <div className="text-center text-xs">
//               <h6>ทางโรงแรมมีบริการขายอาหารแมว</h6>
//               <h6>ทรายแมว ขนมแมวเลีย ของเล่น</h6>
//               <h6>ของใช้ต่างๆ เพื่อให้ท่านได้เลือกสรร</h6>
//               <h6>ให้เหล่าน้องแมวของท่าน</h6>
//             </div>
//           </div>
//         </ServiceCardContainer>
