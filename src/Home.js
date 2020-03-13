import React, {Component} from 'react';
import {Carousel, Container} from 'react-bootstrap';
import Immagine1 from './assets/immaginebici1.jpg';
import Immagine2 from './assets/immaginebici2.jpg';
import Immagine3 from './assets/immaginebici3.jpg';
import './App.css';
import ModalShow from './components/ModalShow';

class Home extends Component {
  render(){
    return(
      <Container>
      <Carousel className="carousel">
        <Carousel.Item className="item">
          <img
            src={Immagine1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="item">
          <img
            src={Immagine2}
            alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="item">
        <img
        src={Immagine3}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.

    Perchè lo utilizziamo?
    </p>
    <ModalShow />
</Container>
    )
  }
}

export default Home;
