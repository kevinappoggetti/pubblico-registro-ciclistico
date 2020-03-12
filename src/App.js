import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import RegistraBici from './RegistraBici';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import {Footer} from './components/Footer';


class App extends Component {
  render(){
    return (
      <React.Fragment >
        <NavigationBar/>
        <Layout >
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/registrabici" component={RegistraBici}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
