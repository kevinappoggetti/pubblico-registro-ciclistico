import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-bootstrap';

const Styles = styled.div`

.footerDiv{
  background-color: #666
}

`;

export const Footer = ()=>(
<Card.Footer className="text-muted">Innovativa Blockchain</Card.Footer>
);
