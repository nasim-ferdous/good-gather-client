import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthPRovider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signin user

  // signin with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    googleSignIn
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthPRovider;
