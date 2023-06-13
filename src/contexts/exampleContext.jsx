import { createContext, useContext } from "react";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const test = () => {
    console.log("test");
  };
  const values = { test };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

// const {values} = useContext(AuthContext)
// values.test()

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return ctx;
};

// const {values} = useAuth()
