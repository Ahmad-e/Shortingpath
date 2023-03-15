import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import  theme  from './state';
import './App.css';

var button_color="light";
var txt="";

function Body() {
  if(theme.mode==="dark")
    button_color = "dark";
  else
    button_color = "secondary";

    const [urlpost,setUrlPost] = useState("");

    
    const f = async () =>{
      document.getElementById("shorted").setAttribute('value',"loading ...");
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          long_url : urlpost
          }),
        headers: { 
          'Content-Type': 'application/json',
          "Accept":"application/json" 
          }
        };
        
        const response = await fetch('https://t.ly/api/v1/link/shorten?api_token=2jOnYQVMeLnKlujdzRbHVU8yw2lpfozR2cWVAXFqgUdHCqOUw06NPI570lPo', requestOptions )
        const result = await response.json();
        txt=result.short_url
          document.getElementById("shorted").setAttribute('value',result.short_url);
      }

    return (
      <div>
        <Form>
          <Form.Group className={"mb-3 form- "+theme.mode} >
            <br/>
            <Form.Label><h4> Enter your long URL hear </h4></Form.Label>
            <textarea onChange={(e)=>setUrlPost(e.target.value)} className="text_e form-control" ></textarea>
            <InputGroup onChange={()=>setUrlPost(this.value)} id="txtAr" rows="4"  className="text- mb-3">
              <Form.Control id="shorted" disabled={true} placeholder="click get path to show sorting path"/>
              <Button onClick={() => {navigator.clipboard.writeText(`${txt}`)}} variant="light"  variant={`${button_color}`}>copy </Button>
              <Button onClick={f} variant="light"  variant={`${button_color}`}> get path</Button>
            </InputGroup>
            <br/>
          </Form.Group>
        </Form>
      </div>
    );
  }
  
  export default Body;