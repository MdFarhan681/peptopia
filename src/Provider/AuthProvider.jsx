import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import toast from "react-hot-toast";

 export const auth = getAuth(app);

export const AuthContext = createContext();
export const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
   const [lastEmail, setLastEmail] = useState("");


  const createuser =(email,password)=>{

    
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const logOut=()=>{
    return signOut(auth)
  }
  const signIn=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleSignIn=()=>{
   return signInWithPopup(auth,googleProvider).then((result)=>{

      const user = result.user;
      setuser(user)
      return user

   }).catch(()=>{
   
   })
  }


const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser,updateData)
}

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setuser(currentUser)
        setloading(false)
    })
    return ()=>{
        unsubscribe()
    }

  },[])


  const authData = {
    user,
    setuser,createuser,logOut,signIn,loading,setloading,updateUser,googleSignIn,setLastEmail,lastEmail
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
