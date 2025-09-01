import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../componensts/Navbar';

const MainLayout = () => {
  return (
    <div>
    <Navbar/>
      <Outlet/>
      
    </div>
  );
};

export default MainLayout;