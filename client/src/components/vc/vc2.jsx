import React from 'react'
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';

// overwrite the existing avatart

function vc2() {
        
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to the Virtual Consultant!",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please tell us your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "Skin Guide",   
          label: "Skin Guide",        
          trigger: "Skin Guide",       
        },       
        { value: "Disease Information", label: "Disease Information", trigger: "Disease Information" },       
      ],       
    },       
    {       
      id: "Skin Guide",       
      message:        
        "Please Select your skin type",        
      options:[
        {
          value: "oily",   
          label: "oily",        
          trigger: "oily",
        },
        {
          value: "Dry",   
          label: "Dry",        
          trigger: "Dry",
        },
        {
          value: "normal",   
          label: "normal",        
          trigger: "normal",
        },
      ]       
    },       
    {       
      id: "Disease Information",       
      message:       
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",       
      end: true,       
    },       
  ]
  return (
    <>
    <Segment floated = 'right' >
        
      <ChatBot steps = {steps} style = {{width:'700px',height:'530px',margin:'30px'}}/>
    </Segment>
    </>
  );
}
export default vc2