import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/Navbar';
import LoginForm from './components/form';
import Header from './components/Header';

class App extends Component {
    render() {
      return (      
        <div >
         <BrowserRouter> 
          <NavBar />
          <Header />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={LoginForm} />
          </Switch>
        </BrowserRouter>
        </div>
      );
    }
  }
   
  export default App;