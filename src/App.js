import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/* 
      <ImageLinkForm />
      <FaceRegonistion /> */}
    </div>
  );
}

export default App;
