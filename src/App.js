import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import {Contact} from './Contact';
import RegistraBici from './RegistraBici';
import {RicercaBici} from './RicercaBici';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {Footer} from './components/Footer';
import './App.css';


class App extends Component {
  render(){
    return (
      <React.Fragment >
        <Layout>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/registrabici" component={RegistraBici}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/ricercabici" component={RicercaBici}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
