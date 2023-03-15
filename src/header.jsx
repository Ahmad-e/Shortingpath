import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MoonFill } from "react-bootstrap-icons";
import React from 'react';
import './App.css';

//`
import  theme ,{toggleTheme} from './state';
function Header() {
  
    return (
      
        <Navbar >
        <Container className={`${theme.mode}`}>
          <Navbar.Brand className={`${theme.mode}`} href="/" >
            <h3 className="header-link ">
                <Nav.Link  href="/"> <p className={`${theme.mode}`}>Path shorting</p></Nav.Link>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <Button variant={`${theme.mode}`}  onClick={toggleTheme} > 
                 <h3> <MoonFill className="left header-icon" size={30}/></h3>
                </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;