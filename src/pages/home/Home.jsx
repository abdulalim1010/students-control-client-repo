import React from 'react';
import Banner from './Banner';
import UpcomingExams from '../exmas/UpcomingExams';

const Home = () => {
  return (
    <div className='bg-blue-900'>
      <Banner />
      <UpcomingExams/>
    </div>
  );
};

export default Home;