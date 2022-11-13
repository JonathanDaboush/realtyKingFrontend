import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar(props){
  let ofContent=Object.values(props.content);
  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {ofContent.map((cont,i) => {
    return (<NavDropdown title={Object.keys(cont)[0]} id={Object.keys(cont)[0]} key={"p"+i.toString()}>
      {Object.values(cont).map((key) => {
        
        return (
            <p>
            {Object.values(key).map((spec,index) => {return(<NavDropdown.Item  onClick={() => props.handleNavBar(spec)} key={'p'+i.toString()+'c'+index.toString()}>{spec}</NavDropdown.Item>)})}
            </p>

          
          
          )
      })}
    </NavDropdown>);
  })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

