import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../componensts/Navbar';
import Footer from '../componensts/footer/Footer';

const MainLayout = () => {
  return (
    <div>
    <Navbar/>
     <div className='bg-blue-900'> <Outlet/></div>
    <div className='bg-blue-900' >  <Footer/></div>
    </div>
  );
};

export default MainLayout;