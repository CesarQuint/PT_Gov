import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <Header/>
        <h1>Foto</h1>
        <main> <Outlet/></main>
        <Footer/>
    </>
  )
}

export default Layout