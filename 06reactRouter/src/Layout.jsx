// We can do this in App.jsx as well

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />   
        <Footer />
    </>
  )
}

export default Layout

// Header Footer will remain same and the <Outlet /> will be changed