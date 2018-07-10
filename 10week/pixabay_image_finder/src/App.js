import React, { Component } from 'react';
//Importing NavBar component//
import NavBar from './components/navbar/NavBar';
//Importing search component//
import Search from './components/search/Search';
//Importing theme provider in order to use components correctlhy//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
//Must wrap everything inside the MuiThemeProvider//
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
