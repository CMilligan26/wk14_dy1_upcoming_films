import React, { Component } from 'react';

class UpcomingFilm extends Component {
  render(){
    return (
      <>
    <a href={this.props.filmLink}>
    <h3>{this.props.filmName}</h3>
    </a>
    </>
  )
  }
}

export default UpcomingFilm;
