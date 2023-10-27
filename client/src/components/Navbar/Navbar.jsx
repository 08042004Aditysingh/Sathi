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
            <li><a href="/contact">CONTACT US</a></li>
            <li><a href="#">BLOG</a></li>

            </ul>


      </div>

      <div className="right">

      <a href='http://127.0.0.1:5500'><button className='ab'>
      <span class="button_top"> 
      
<<<<<<< HEAD
       SCAN/ANALYSE 
=======
      <a href='http://127.0.0.1:5500'> SCAN/ANALYSE </a>
>>>>>>> 73d3301ad40868f5150e3c3815e59c35d8bf44d4
        </span>
        </button></a>

      </div>



    </div>
  )
}

export default Navbar