import React,{Component} from 'react';
import {ButtonToolbar, Button, Form, Col, Container, Card, InputGroup, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class RegistraBici extends Component {

  state = {
    show:false,
    setShow:false,
    showHash:false,
    setShowHash:false,
    hash:'',
    nome:'',
    cognome:'',
    sesso:'',
    datadinascita:new Date(),
    email:'',
    stato:'',
    indirizzo:'',
    citta:'',
    cap:'',
    tipobici:'',
    modello:'',
    marca:'',
    telaio:'',
    fotobici:'',
    datadiacquisto:new Date(),
    fotoprovadiacquisto:'',
    segniparticolari:'',
    fotosegniparticolari:'',
    datadiacquistoString:''
  }

  showModal = ()=> {
    this.setState({show:true});
    console.log(this.show);
  }

  hideModal = ()=>{
  this.setState({ show: false });
  }

  showModalHash=()=>{
    this.setState({showHash:true});
  }

  hideModalHash=()=>{
    this.setState({showHash:false});
  }

  handleNomeChange=(e) => {
   this.setState({nome: e.target.value});
  }

  handleCognomeChange=(e) => {
   this.setState({cognome: e.target.value});
  }

  handleSessoChange=(e) => {
   this.setState({sesso: e.target.value});
  }

  handleDataDiNascitaChange=(e) => {
   this.setState({datadinascita: e.target.value});
  }

  handleEmailChange=(e) => {
   this.setState({email: e.target.value});
  }

  handleStatoChange=(e) => {
   this.setState({stato: e.target.value});
  }

  handleIndirizzoChange=(e) => {
   this.setState({indirizzo: e.target.value});
  }

  handleCittaChange=(e) => {
   this.setState({citta: e.target.value});
  }

  handleCapChange=(e) => {
   this.setState({cap: e.target.value});
  }

  handleTipoBiciChange=(e) => {
   this.setState({tipobici: e.target.value});
  }

  handleModelloChange=(e) => {
   this.setState({modello: e.target.value});
  }

  handleMarcaChange=(e) => {
   this.setState({marca: e.target.value});
  }

  handleFotoBiciChange=(e) => {
   this.setState({fotobici: e.target.value});
  }

  handleDataDiAcquistoChange=(e) => {
   this.setState({datadiacquisto: e.target.value});
  }

  handleFotoProvaDAcquistoChange=(e) => {
   this.setState({fotoprovadiacquisto: e.target.value});
  }

  handleSegniParticolariChange=(e) => {
   this.setState({segniparticolari: e.target.value});
  }

  handleFotoSegniParticolariChange=(e) => {
   this.setState({fotosegniparticolari: e.target.value});
  }

  sha256 = async (message) => {
    // encode as UTF-8
    const getTyped=this.state.tipobici.concat(
      this.state.modello,
      this.state.marca,
      this.state.telaio,
      this.state.fotobici,
      this.state.datadiacquisto,
      this.state.fotoprovadiacquisto,
      this.state.segniparticolari,
      this.state.fotosegniparticolari);
    const msgBuffer = new TextEncoder('utf-8').encode(getTyped);
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    this.setState({hash:hashHex,show:false});
    this.showModalHash();
    console.log("nome "+this.state.nome);
    console.log("Data di nascita"+this.state.datadinascita.toString());
    console.log("Data stringa " +this.state.datadiacquisto);

    //hideModal();
  }

  handleChangeDataDiAcquisto = date => {
    this.setState({
      datadiacquisto: date,
      datadiacquistoString: date.toString
    });
  };

  handleChangeDataDiNascita = date => {
      this.setState({
        datadinascita: date
      });
    };

  render(){
    //Modal variables
    return(
        <Container >
        <h2 id="h2Title">Registra qui la tua bici</h2>

          <Card className="boxShadow" id="informazioniCardPersonale" border="secondary">
            <Card.Body>
              <Form>
                <Card.Title>Informazioni Personali</Card.Title>
                <Form.Row>
                  <Form.Group onChange={this.handleNomeChange} as={Col} >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="classicFieldNome"placeholder="Nome" />
                  </Form.Group>

                  < Form.Group onChange={this.handleCognomeChange} as={Col} >
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control id="classicFieldCognome" placeholder="Cognome" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleSessoChange} as={Col} md="3" >
                      <Form.Label>Sesso</Form.Label>
                        <Form.Check  type="radio" name="options" label = "Maschio" id="inline-radio-1" />
                        <Form.Check inline type="radio" name="options" label = "Femmina" id="inline-radio-2"/>
                    </Form.Group>

                    <Form.Group onChange={this.handleDataDiNascitaChange} as={Col} md="3" >
                      <Form.Label>Data Di Nascita</Form.Label>
                      <DatePicker
                        disableClock={true}

                        selected={this.state.datadinascita}
                        onChange={this.handleChangeDataDiNascita}
                      />
                    </Form.Group>

                    <Form.Group onChange={this.handleEmailChange} as={Col} md="6" >
                      <Form.Label>Email</Form.Label>
                      <Form.Control id="classicFieldEmail" type="email" placeholder="Email" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleStatoChange} as={Col} >
                      <Form.Label>Stato</Form.Label>
                      <Form.Control id="classicFieldStato" as="select">
                        <option>Scegli...</option>
                        <option>Italia</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleIndirizzoChange} as ={Col} md="6" >
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control id="classicFieldIndirizzo" placeholder="Indirizzo" />
                    </Form.Group>

                    <Form.Group onChange={this.handleCittaChange} as={Col} md="5">
                      <Form.Label>Città</Form.Label>
                      <Form.Control id="classicFieldCitta" placeholder="Città" />
                    </Form.Group>

                    <Form.Group onChange={this.handleCapChange} as={Col} md="1" >
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
                    <Form.Group onChange={this.handleTipoBiciChange} as={Col} md="6" >
                      <Form.Label>Tipo Bici</Form.Label>
                      <Form.Control id="classicFieldTipoBici" placeholder="Tipo Bici" />
                    </Form.Group>

                    <Form.Group onChange={this.handleModelloChange} as={Col} md="6">
                      <Form.Label>Modello</Form.Label>
                      <Form.Check type="radio" name="biciradio" value="Tradizionale" label = "Tradizionale" id="Tradizionale" />
                      <Form.Check inline type="radio" name="biciradio" value="Elettrica" label = "Elettrica" id="Elettrica"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleMarcaChange} as={Col} md="6" >
                      <Form.Label>Marca</Form.Label>
                      <Form.Control id="classicFieldMarca" placeholder="Marca" />
                    </Form.Group>

                    <Form.Group onChange={this.handleTelaioChange} as={Col} md="6" >
                      <Form.Label>Telaio</Form.Label>
                      <Form.Control id="classicFieldTelaio" placeholder="Telaio"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleFotoBiciChange} as={Col} md="6" >
                      <Form.Label>Foto Bici</Form.Label>
                      <Form.Control id="classicFieldFotoBici" placeholder="Foto Bici" />
                    </Form.Group>

                    <Form.Group onChange={this.handleDataDiAcquistoChange} as={Col} md="6" >
                      <Form.Label>Data Acquisto</Form.Label>
                      <DatePicker
                        selected={this.state.datadiacquisto}
                        onChange={this.handleChangeDataDiAcquisto}
                        dateFormat="dd-mm-yyyy"
                        placeholderText="Data"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleFotoProvaDAcquistoChange} as={Col}>
                      <Form.Label>Foto Prova D'Acquisto</Form.Label>
                      <Form.Control id="classicFieldProvaDAcquisto" placeholder="Foto prova d'acquisto"/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group onChange={this.handleSegniParticolariChange} as={Col} md="6" >
                      <Form.Label>Segni Particolari</Form.Label>
                      <Form.Control id="classicFieldSegniParticolari" placeholder="Segni Particolari" />
                    </Form.Group>

                    <Form.Group onChange={this.handleFotoSegniParticolariChange} as={Col} md="6" >
                      <Form.Label>Foto Segni Particolari</Form.Label>
                      <Form.Control id="classicFieldFotoSegniParticolari" placeholder="Foto segni particolari"/>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group id="formGridTerminiECondizioni">
                      <Form.Check type="checkbox" label="Accetto termini e Condizioni d'uso" />
                    </Form.Group>
                  </Form.Row>

                  <Button variant="outline-primary" onClick={this.showModal} >
                    Registra la tua Bici!
                  </Button>
                  <Modal id="modalClass" show={this.state.show} onHide={this.hideModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Sei sicuro di voler registrare la tua bici e le tue informazioni?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Ai fini della tutela dei dati personali, tali dati non saranno salvati sulla Blockchain</Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-secondary" onClick={this.hideModal}>
                          Annulla
                        </Button>
                        <Button variant="outline-primary" onClick={this.sha256} show={this.state.show}>
                          Registra
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Modal id="modalShowId" show={this.state.showHash} onHide={this.hideModalHash}>
                      <Modal.Header closeButton>
                        <Modal.Title>Hash della transazione</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Il tuo hash è {this.state.hash}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={this.hideModalHash}>
                          Capito!
                        </Button>
                      </Modal.Footer>
                    </Modal>

                </Form>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}


export default RegistraBici;
