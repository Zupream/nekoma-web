import { createContext, useContext, useEffect, useState } from "react";
import * as roomService from "../api/room-api";

// import { setAccessToken } from "../utils/localstorage";

const RoomContext = createContext(null);

function RoomContextProvider({ children }) {
  const [allRooms, setAllRooms] = useState([]);
  const [roomDetail, setRoomDetail] = useState({});

  const fetchAllRooms = async () => {
    const res = await roomService.getAllRooms();
    setAllRooms(res.data.rooms);
  };

  useEffect(() => {
    fetchAllRooms();
  }, []);

  const fetchRoomDetail = async (roomId) => {
    const res = await roomService.getRoomDetailById(roomId);
    setRoomDetail(res.data.roomDetail);
  };

  const values = { allRooms, roomDetail, fetchRoomDetail };

  return <RoomContext.Provider value={values}>{children}</RoomContext.Provider>;
}

export default RoomContextProvider;

// const {values} = useContext(AuthContext)
// values.test()

export const useRoom = () => {
  const ctx = useContext(RoomContext);

  if (!ctx) {
    throw new Error("useAuth must be used within a RoomContextProvider");
  }

  return ctx;
};
