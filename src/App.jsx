import React from 'react';

import './App.css';
import Header from './Components/Header';
import Switcheroo from './Components/Switcheroo';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switcheroo />

      </div>
    )
  }
}

export default App;
