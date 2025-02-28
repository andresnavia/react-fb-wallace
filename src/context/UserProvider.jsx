import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      console.log("informacion del usuario: ");
      console.log(user);
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const singOutUser = () => signOut(auth);
  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, loginUser, singOutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
