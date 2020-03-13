import React from 'react';
import {Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import '../App.css';

export const NavigationBar = () => (

    <Navbar collapseOnSelect expand="lg" bg="light" >
    <Navbar.Brand href="/">
        <img src={Logo}/>
    </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/registrabici">Registra una Bici</Nav.Link>
          <Nav.Link href="/contact">Contattaci</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Cerca un modello" className="mr-sm-2" />
          <Button variant="outline-primary" >Ricerca una Bici</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
)
