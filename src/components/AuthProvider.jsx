import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [user,setUser] = useState([])
const [loaded, setLoaded] = useState(false)
const [dataLoad,setDataLoad] = useState(true)
// create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

// login user 
  const signInUser = (email, password) => {
    setDataLoad(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

 

//   logout user 
  const signOutUser = () => {
    setDataLoad(true)
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error.message)
      });
  };

// curren user information
  useEffect(()=>{
     const changeAuth = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        console.log(user)
        setDataLoad(false)
     })
     return () => {
        changeAuth()
     }
  },[loaded])

  const authInfo = { createUser,signInUser, signOutUser, user, setLoaded, loaded , dataLoad};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
