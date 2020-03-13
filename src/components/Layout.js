import React from 'react';
import {Container} from 'react-bootstrap';
import '../App.css';

export const Layout = (props) => (
  <Container id="containerId">
    {props.children}
  </Container>
)
