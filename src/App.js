import React, { Component } from 'react';
import WeatherWidget from './components/WeatherWidget';
import './main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherWidget/>
      </div>
    );
  }
}

export default App;
