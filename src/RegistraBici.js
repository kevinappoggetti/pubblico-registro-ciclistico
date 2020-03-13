import React,{Component} from 'react';
import {ButtonToolbar, Button, Form, Col, Container, Card, InputGroup, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';

export const RegistraBici = () => {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Container >
        <h2>Registra qui la tua bici</h2>

          <Card className="boxShadow" id="informazioniCardPersonale" border="secondary">
            <Card.Body>
              <Form>
                <Card.Title>Informazioni Personali</Card.Title>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder="Nome" />
                  </Form.Group>

                  < Form.Group as={Col} controlId="formGridCognome">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control placeholder="Cognome" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <div key="inline-radio">
                    <Form.Group as={Col} md="2" controlId="formGridSesso">
                      <Form.Label>Sesso</Form.Label>
                        <Form.Check inline type="radio" name="options" label = "Maschio" id="inline-radio-1" />
                        <Form.Check inline type="radio" name="options" label = "Femmina" id="inline-radio-2"/>
                    </Form.Group>
                    </div>

                    <Form.Group as={Col} md="10" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridStato">
                      <Form.Label>Stato</Form.Label>
                      <Form.Control as="select">
                        <option>Scegli...</option>
                        <option>Italia</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as ={Col} md="6" controlId="formGridIndirizzo">
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} md="5" controlId="formGridCittà">
                      <Form.Label>Città</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="1" controlId="formGridCap">
                      <Form.Label>Cap</Form.Label>
                      <Form.Control />
                      </Form.Group>
                  </Form.Row>
                </Form>
              </Card.Body>
            </Card>
            <Card className="boxShadow "
            id="informazioniCardBici"
            //id="informazioniCardBicicletta"
            border="secondary">
              <Card.Body>
                <Form>
                <h4>Informazioni sulla tua bicicletta</h4>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridTipoBici">
                      <Form.Label>Tipo Bici</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formGridModello">
                      <Form.Label>Modello</Form.Label>
                      <Form.Check type="radio" name="biciradio" label = "Tradizionale" id="Tradizionale" />
                      <Form.Check inline type="radio" name="biciradio" label = "Elettrica" id="Elettrica"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridMarca">
                      <Form.Label>Marca</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formGridTelaio">
                      <Form.Label>Telaio</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridFotoBici">
                      <Form.Label>Foto Bici</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formGridDataAcquisto">
                      <Form.Label>Data Acquisto</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFotoProvaDAcquisto">
                      <Form.Label>Foto Prova D'Acquisto</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formGridSegniParticolari">
                      <Form.Label>Segni Particolari</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formGridFotoSegniParticolari">
                      <Form.Label>Foto Segni Particolari</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group id="formGridTerminiECondizioni">
                      <Form.Check type="checkbox" label="Accetto termini e Condizioni d'uso" />
                    </Form.Group>
                  </Form.Row>


                  <Button variant="outline-primary" onClick={handleShow} >
                    Registra la tua Bici!
                  </Button>
                  <Modal id="modalClass" show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Sei sicuro di voler registrare la tua bici e le tue informazioni?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Ai fini della tutela dei dati personali, i dati personali non saranno salvati sulla Blockchain</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                          Annulla
                        </Button>
                        <Button variant="outline-primary" onClick={handleClose}>
                          Registra
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </Form>
            </Card.Body>
          </Card>
        </Container>

    );
  }


export default RegistraBici;
