import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/Navbar';
import LoginForm from './components/form';

class App extends Component {
    render() {
      return (      
        <div >
         <BrowserRouter> 
          <NavBar />
          <switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={LoginForm} />
          </switch>
        </BrowserRouter>
        </div>
      );
    }
  }
   
  export default App;