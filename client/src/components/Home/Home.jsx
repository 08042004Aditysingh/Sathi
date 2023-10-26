import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='HomePage'>
      <div><Navbar/></div>

      <div className="HomeBottom">
      <div className='bottomtext'><div className='quote'>"Skin diseases affect millions globally, and the lack of access to dermatological care in resource-poor regions remains a challenge. Technology, such as AI-based tools, can bridge this healthcare gap and improve health outcomes."</div>
      <br></br>
      <div className="saidby"><b>~ WHO Director-General Dr. Tedros Adhanom Ghebreyesus</b></div>
      
      </div>

      <div ><img className='imgbottom1'src="/asset/sathi1.jpg" alt="" /></div>
    </div>

    
    <div className="virtual">

      <Link to='/vc'>
      <button className='consult'>
        
         VIRTUAL CONSULTANT
      </button>
         
         </Link> 

    </div>
    </div>

    </>
  )
}

export default Home
