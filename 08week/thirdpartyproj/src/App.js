import React, { Component } from 'react';
import {Footer, Navbar, Button,} from 'react-materialize';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar ></Navbar>
        <h1>hello</h1>
        <Footer className='blue myfooter'> </Footer>
        <Navbar className= 'pink'> </Navbar>
         <Button floating icon='publish' className='green'/>
         
      </div>
    );
  }
}

export default App;
