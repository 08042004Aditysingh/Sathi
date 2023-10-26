
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button,Container} from 'react-bootstrap';
// import {Configuration} from 'openai';
import { useState } from 'react';


// const configuration = Configuration({apiKey:process.env.REACT_APP_OPENAI_KEY})
function vc() {
  const [questionType,setQuestionType]= useState('general')
  const [cbResponse,setCbResponse]= useState('')
  const [userInput,setUserInput]= useState('')
  const [isLoading,setIsLoading]= useState(false)
  return (
    <Container className='mt-3'>
      <Row>
        {['general','translate','weather'].map(el=>{
          return(
            <Col key = {el}>
              <Button variant = "primary" onClick = {()=>setQuestionType(el)}>{el}</Button>
            </Col>
          )
        })}
      </Row>
      <h3 className = 'my-3'>Question Type: <b>{questionType}</b></h3>
    </Container>
  )
}

export default vc
