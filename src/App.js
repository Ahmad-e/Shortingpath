
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './body';
import Down from './down';
import {useState} from 'react';
import LOGO from './logo.png'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MoonFill } from "react-bootstrap-icons";
import React from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [mode,setMode] = useState('light')
  const [urlpost,setUrlPost] = useState("");
  const [result,setresult] = useState('')
  var txt="";
  const tuggleMode=()=>{
    if(mode==="dark")
      setMode("light")
    else
      setMode("dark")
  }

  const sendData = () =>{
    document.getElementById("shorted").setAttribute('value',"loading ...");
    //var long_url=urlpost;
    //setUrlPost("loading ...")
      try {
        
        const userData = {
          url:urlpost
        };
        axios.post("https://shrtlnk.dev/api/v2/link", userData,{
          headers:{
            'Content-Type': 'application/json',
            'api-key': 'oeqOBL2wgdeh0ypSiIqUacT7GFf4tDCOjm3PUpIBAzC0O',
          }
        }).then((response) => {
          console.log(response.data);
          setresult(response.data.shrtlnk)

        }).catch((error) => {
          setresult("Something went wrong, try again")
          console.log(error);
      })
    } catch (e) {
        throw e;
    }
    }

  return (
    <div className={"bg_"+mode+" App" } >
      {/* start header */}
      <Navbar >
        <Container>
            <h4 className={mode +" d_inline"}>
                <img className="logo" src={LOGO} />
                Path shorting
            </h4>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                 <h3 onClick={()=>tuggleMode()} className={mode}> <MoonFill className="left header-icon" size={30}/></h3>
                
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* end header */}
      {/* start body */}
      <div>
        <Form>
          <Form.Group className={"mb-3 form- "+mode} >
            <br/>
            <Form.Label><h5> Enter your long URL here and press get path </h5></Form.Label>
            <textarea value={urlpost} onChange={(e)=>setUrlPost(e.target.value)} className="text_e form-control" ></textarea>
            <InputGroup onChange={()=>setUrlPost(this.value)} id="txtAr" rows="4"  className="text- mb-3">
              <Form.Control value={result} id="shorted" disabled={true} placeholder="click get path to show sorting path"/>
              <Button onClick={() => {navigator.clipboard.writeText(`${txt}`)}} variant="light"  variant={mode}>copy </Button>
              <Button onClick={()=>sendData()} variant="light"  variant={mode}> get path</Button>
            </InputGroup>
            <br/>
          </Form.Group>
        </Form>
      </div>
      {/* end body */}
      <div className={mode + " down-div"}>
            <a className="link" href="https://facebook.com/profile.php?id=100015622094488"> 
                <svg  fill={mode==="dark" ? "#eee" : "#333"} className="facebook bi bi-facebook contact" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
            </a>
            <a className="link" href="https://t.me/EnAhmadHomse"> 
                <svg  fill={mode==="dark" ? "#eee" : "#333"}  className="telegram bi bi-telegram contact" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg> 
            </a>
            <a className="link "  href="mailto:homseahmad07@gmail.com">
                <svg fill={mode==="dark" ? "#eee" : "#333"}  className="email bi bi-envelope-at-fill contact" viewBox="0 0 16 16">
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                </svg>
            </a>
        </div>
    </div>
  );
}

export default App;
