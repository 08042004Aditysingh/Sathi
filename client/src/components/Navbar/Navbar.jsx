import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="left">

        <img src="public/asset/logo1.jpg" alt="" className="logo1" />

      </div>

      <div className="center">
        <ul>

            <li><a href="/home">HOME</a></li>
            <li><a href="/aboutus">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">BLOG</a></li>

            </ul>


      </div>

      <div className="right">

      <button className='ab'>
      <span class="button_top"> 
      
      <a href='/Mlpage'> SCAN/ANALYSE </a>
        </span>
        </button>

      </div>



    </div>
  )
}

export default Navbar