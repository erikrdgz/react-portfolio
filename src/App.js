import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import Home from './components/contentComponent/home';
import Work from './components/contentComponent/work';
import About from './components/contentComponent/about';
import Contact from './components/contentComponent/contact';
// import WOW from 'wow.js';




class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Home/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    );
  }

}

export default App;
