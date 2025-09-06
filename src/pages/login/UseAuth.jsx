import React, { useContext } from 'react';
import { Authcontext } from './authcotext/Authcontext';

const UseAuth = () => {
  const authInfo = useContext(Authcontext)
  return authInfo;
 
};

export default UseAuth;