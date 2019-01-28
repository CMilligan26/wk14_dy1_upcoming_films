import React, { Component } from 'react';
import './App.css';
import UpcomingFilmContainer from './containers/UpcomingFilmContainer.js'

class App extends Component {
  render() {
    return (
      <div className="Container">
      <UpcomingFilmContainer />
      </div>
    );
  }
}

export default App;
