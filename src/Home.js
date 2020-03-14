import React, {Component} from 'react';
import {Carousel, Container} from 'react-bootstrap';
import Immagine1 from './assets/immaginebici1.jpg';
import Immagine2 from './assets/immaginebici2.jpg';
import Immagine3 from './assets/immaginebici3.jpg';
import Immagine4 from './assets/immaginebici4.jpg';
import Immagine5 from './assets/immaginebici5.jpg';
import {Button} from 'react-bootstrap';
import './App.css';

class Home extends Component {
  render(){
    return(
      <Container id="containerId">
        <Container className="carouselContainer">
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
      </Container>

    <Container id="containerBiciHome">
      <Container id="containerBiciHome1">
        <p className="paragrafoHome1">Hai bisogno di dimostrare la proprietà della tua bicicletta?</p>
        <h4 style={{fontWeight:"bold", fontSize:22, paddingTop:10, paddingBottom:10}}>TUTELA LA PROPRIETÀ DELLA TUA BICI</h4>
        <p className="paragrafoHome1">Ottieni il Documento Unico della Bicicletta notarizzato su blockchain pubblica Ethereum</p>
        <ul>
          <li>certifichi l’autenticità della tua preziosa bicicletta.</li>
          <li>rivendichi la proprietà in ogni momento e per sempre.</li>
          <li>previeni il furto in maniera innovativa</li>
          <li>dimostri in maniera certificata la vendita della bici tra privati.</li>
          <li>puoi stipulare polizze RCA, furto, conducente.</li>
        </ul>
        <Button id="buttonHomeCoseBlockchain" variant="outline-primary">
          Cos&rsquo;&egrave; la Blockchain?
        </Button>
      </Container>
      <Container id="containerBiciHome2">
      </Container>
    </Container>

    <Container id="containerBlockchainHome">
      <Container id="containerBlockchainHome1">
        <h3 style={{fontWeight:"bold", fontSize:22, paddingTop:10, paddingBottom:10}}>Sempre più persone si affidano alla blockchain!</h3>
      </Container>
      <Container id="containerBlockchainHome2">
        <p> La firma digitale dà valore legale a un documento in formato digitale e funziona con un codice hash.
            Pubblicoregistrociclistico.it crea un HASH UNIVOCO per la tua bici o ebike, che viene notarizzato nella blockchain pubblica di Ethereum al fine di dimostrare in qualsiasi momento e per sempre chi è il proprietario della bicicletta.</p>
        <p>La blockchain è una recente tecnologia simile ad un database ma che ha le caratteristiche di immutabilità, sicurezza e garanzia di integrità dei dati, riconosciuta dall’Ordinamento Giuridico Italiano il 7 Febbraio 2019 attraverso il noto <a href="/">Decreto Semplificazioni</a>.</p>
      </Container>
    </Container>

    <Container id="containerComeFunziona">
      <h3 style={{fontWeight:"bold", fontSize:22, paddingTop:10, paddingBottom:10}}>Come funziona</h3>
    </Container>
    <Container id="containerCarte">

      <Container id="card1">
        <Container id="face1">
          <Container id="content1">
            <img
              src={Immagine3} />
            <h4>1- Registra la tua bicicletta</h4>
          </Container>
        </Container>
        <Container id="face12">
          <Container id="content12">
            <p>Inserisci i dati e le foto della bici, senza tralasciare i dettagli che ne rendono facile l’identificazione.</p>
          </Container>
        </Container>
      </Container>

      <Container id="card2">
        <Container id="face2">
          <Container id="content2">
            <img
              src={Immagine4} />
            <h4>2 – Ricevi il documento unico</h4>
          </Container>
        </Container>
        <Container id="face22">
          <Container id="content22">
            <p>Via e-mail ricevi il documento in pdf che certificherà la proprietà della bicicletta.</p>
          </Container>
        </Container>
      </Container>

      <Container id="card3">
        <Container id="face3">
          <Container id="content3">
            <img
              src={Immagine5} />
            <h4>3 – La tua bicicletta è al sicuro</h4>
          </Container>
        </Container>
        <Container id="face32">
          <Container id="content32">
            <p>Potrai rivendicare in qualsiasi momento e in maniera certificata la proprietà della tua bicicletta, anche in caso di acquisto da privato.</p>
          </Container>
        </Container>
      </Container>
    </Container>
</Container>
    );
  }
}

export default Home;
