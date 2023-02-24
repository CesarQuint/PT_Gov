import React from 'react'
import Navbar from '../Components/Navbar'
import logo from '../assets/img/Logo_SGob.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header>
    <div className='header'>
        <Link to="/">
        <div className='logoContainer'>
            <div className='logoImg'>
                <img src={logo} className="logo" />
            </div>
            <div className='arrow'>
                <h4>Gobierno<br/>de Santiago</h4>
            </div>
        </div>
        </Link>
        <div>
            <Navbar/>
        </div>
    </div>
   </header>
  )
}

export default Header