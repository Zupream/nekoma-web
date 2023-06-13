import axios from "../config/axios";

export const fetchMe = () => axios.get("/auth/getMe");
export const register = (input) => axios.post("/auth/register", input);
export const login = (input) => axios.post("/auth/login", input);
