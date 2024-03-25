import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import  theme  from './state';
import './App.css';
import axios from "axios";

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
        
        try {
          
          const userData = {
            url:"http://google.com/"
          };
          axios.post("https://shrtlnk.dev/api/v2/link", userData,{
            headers:{
              'Content-Type': 'application/json',
                  'api-key': 'oeqOBL2wgdeh0ypSiIqUacT7GFf4tDCOjm3PUpIBAzC0O',
            }
          }).then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.log(error);
        })
      } catch (e) {
          throw e;
      }
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