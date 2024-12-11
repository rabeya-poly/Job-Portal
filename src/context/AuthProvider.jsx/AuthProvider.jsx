import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
     setUser(currentUser);
     console.log('state capture',currentUser);
     setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
  },[])

   const authInfo = {
   user,
   loading,
   createUser,
   signInUser,
   signOutUser
   }
    return (
       <AuthContext.Provider   value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;