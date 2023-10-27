import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_r4ivf6j','template_nqxiuur',form.current,'FQQp7JW3m4R7eM2Yo');
    e.target.reset();

  }
  return (
    <section id='contact'>
     <h5>Get Connected to Dermatalogist</h5>
     <h2>Contact</h2>
     <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon"/>
          <h4>Email</h4>
          <h5>singhaditya200408apr@gmail.com</h5>
          <a href="mailto:singhaditya200408apr@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <RiMessengerLine className="contact_option-icon"/>
          <h4>Messenger</h4>
          <h5>adiPathalabs</h5>
          <a href="https://web.whatsapp.com/"target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className="contact_option-icon"/>
          <h4>WhatsApp</h4>
          <h5>6376872330</h5>
          <a href="https://api.whatsapp.com/send?phone-+916376872330"target="_blank">Send a message</a>
        </article>
      </div>

      {/*END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text"name='name'placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" id="10" rows="7"placeholder='Add your Symptoms' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>


    </section>
  )
}

export default Contact
