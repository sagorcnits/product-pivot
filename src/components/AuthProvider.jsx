import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [user,setUser] = useState([])
const [loaded, setLoaded] = useState(false)
// create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
// login user 
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

//   logout user 
  const signOutUser = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error.message)
      });
  };


  useEffect(()=>{
     const changeAuth = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        console.log(user)
     })
     return () => {
        changeAuth()
     }
  },[loaded])

  const authInfo = { createUser,signInUser, signOutUser, user, setLoaded, loaded };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
