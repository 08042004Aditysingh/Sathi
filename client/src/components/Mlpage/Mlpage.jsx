import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Mlpage.css'

const Mlpage = () => {

  useEffect(()=>{
    fet
  },[])

  return (
    <>
    <div className="machine">
    <Navbar/>


    <div className="machinebut">

      <h2>Please Input Image of the Affected Area.</h2>

      <div className="mlinput">


     <button className='mli'><label className='lab' for="file" >+</label></button> 
      <input type='file' className='addfile' id='file'/>
      </div>

      <div className="scanbut">

      <button className='butt'> SCAN</button>

      </div>


    </div>

    </div>


    
    
    </>
  )
}

export default Mlpage
