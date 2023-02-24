import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <Header/>
        <main> <Outlet/></main>
        <h1>Footer</h1>
        <Footer/>
    </>
  )
}

export default Layout