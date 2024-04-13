import React from 'react'
import { Footer, Header } from './components/components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout;