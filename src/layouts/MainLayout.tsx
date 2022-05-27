import React, { ReactElement } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout