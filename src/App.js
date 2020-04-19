import React from 'react';
import './App.css';
 import Home from './FullScreen.js';
//import Home from './Home.js';
import HiddenMobile from './components/HiddenMobile.js';

function App() {
  return (
    <div>
      <Home />
      <HiddenMobile />
    </div>
  );
}

export default App;
