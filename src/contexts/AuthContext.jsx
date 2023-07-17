import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/auth-api";
import { removeAccessToken, setAccessToken } from "../utils/localstorage";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // ดึงข้อมูลเพื่อดูว่าล้อคอินหรือยัง
  useEffect(() => {
    const run = async () => {
      try {
        const res = await authService.fetchMe();
        setUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  }, []);

  // const onChangeRegister = (field, value) => {
  //   const cloneUser = { ...newUser };
  //   cloneUser[field] = value;
  //   setNewUser(cloneUser);
  // };

  const fetchMe = async () => {
    const res = await authService.fetchMe();
    setUser(res.data.user);
  };

  const onSubmitRegister = async (newUser) => {
    const { firstName, lastName, tel, email, password, confirmPassword } =
      newUser;

    if (
      !firstName ||
      !lastName ||
      !tel ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const res = await authService.register(newUser);

    const token = res.data.accessToken;
    setAccessToken(token);

    fetchMe();
  };

  const onSubmitLogin = async (user) => {
    const { email, password } = user;
    if (!email || !password) {
      return;
    }
    const res = await authService.login(user);

    const token = res.data.accessToken;
    setAccessToken(token);

    fetchMe();
  };

  const values = { user, onSubmitRegister, onSubmitLogin };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return ctx;
};
