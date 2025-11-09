import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthPRovider = ({ children }) => {
  const user = {
    name: "ulala",
  };
  const authInfo = {
    user,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthPRovider;
