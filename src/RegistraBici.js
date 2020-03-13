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
        <h2 id="h2Title">Registra qui la tua bici</h2>

          <Card className="boxShadow" id="informazioniCardPersonale" border="secondary">
            <Card.Body>
              <Form>
                <Card.Title>Informazioni Personali</Card.Title>
                <Form.Row>
                  <Form.Group as={Col} >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="classicFieldNome"placeholder="Nome" />
                  </Form.Group>

                  < Form.Group as={Col} >
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control id="classicFieldCognome" placeholder="Cognome" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="3" >
                      <Form.Label>Sesso</Form.Label>
                        <Form.Check  type="radio" name="options" label = "Maschio" id="inline-radio-1" />
                        <Form.Check inline type="radio" name="options" label = "Femmina" id="inline-radio-2"/>
                    </Form.Group>

                    <Form.Group as={Col} md="3" >
                      <Form.Label>Data</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                      <Form.Label>Email</Form.Label>
                      <Form.Control id="classicFieldEmail" type="email" placeholder="Email" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} >
                      <Form.Label>Stato</Form.Label>
                      <Form.Control id="classicFieldStato" as="select">
                        <option>Scegli...</option>
                        <option>Italia</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as ={Col} md="6" >
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control id="classicFieldIndirizzo" placeholder="Indirizzo" />
                    </Form.Group>

                    <Form.Group as={Col} md="5">
                      <Form.Label>Città</Form.Label>
                      <Form.Control id="classicFieldCitta" placeholder="Città" />
                    </Form.Group>

                    <Form.Group as={Col} md="1" >
                      <Form.Label>Cap</Form.Label>

                      <Form.Control id="classicFieldCap" placeholder="Cap"/>
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
                    <Form.Group  as={Col} md="6" >
                      <Form.Label>Tipo Bici</Form.Label>
                      <Form.Control id="classicFieldTipoBici" placeholder="Tipo Bici" />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                      <Form.Label>Modello</Form.Label>
                      <Form.Check type="radio" name="biciradio" label = "Tradizionale" id="Tradizionale" />
                      <Form.Check inline type="radio" name="biciradio" label = "Elettrica" id="Elettrica"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Marca</Form.Label>
                      <Form.Control id="classicFieldMarca" placeholder="Marca" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                      <Form.Label>Telaio</Form.Label>
                      <Form.Control id="classicFieldTelaio" placeholder="Telaio"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Foto Bici</Form.Label>
                      <Form.Control id="classicFieldFotoBici" placeholder="Foto Bici" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                      <Form.Label>Data Acquisto</Form.Label>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Foto Prova D'Acquisto</Form.Label>
                      <Form.Control id="classicFieldProvaDAcquisto" placeholder="Foto prova d'acquisto"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Segni Particolari</Form.Label>
                      <Form.Control id="classicFieldSegniParticolari" placeholder="Segni Particolari" />
                    </Form.Group>

                    <Form.Group as={Col} md="6" >
                      <Form.Label>Foto Segni Particolari</Form.Label>
                      <Form.Control id="classicFieldFotoSegniParticolari" placeholder="Foto segni particolari"/>
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
                      <Modal.Body>Ai fini della tutela dei dati personali, tali dati non saranno salvati sulla Blockchain</Modal.Body>
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
