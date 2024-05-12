import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

const [user, setUser] = useState([])


const createUSer = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const authInfo = {createUSer}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;