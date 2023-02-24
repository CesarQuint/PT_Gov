import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <>
        <Header/>
        <main> <Outlet/></main>
        <h2>Footer</h2>
    </>
  )
}

export default Layout