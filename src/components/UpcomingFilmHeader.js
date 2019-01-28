import React, { Component } from 'react'

class UpcomingFilmHeader extends Component{
  render(){
    return(
      <h1>Upcoming Film Releases For {this.props.country}</h1>
    )
  }
}

export default UpcomingFilmHeader;
