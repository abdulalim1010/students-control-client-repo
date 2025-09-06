import React, { useEffect, useState } from 'react';
import { Authcontext } from './authcotext/Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => { 
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    
    setLoading(true);
    return signOut(auth);
  }

  const registration = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

  }
  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  },[])



  const authInfo = {
    login,
    logOut,
    user,
    loading,
    registration,
    signInGoogle

  }
  return (
    <Authcontext.Provider value={authInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;