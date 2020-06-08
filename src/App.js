import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>My App</Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Button>Hello, Storybook!</Button>
        </p>
      </header>
    </div>
  );
}

export default App;
