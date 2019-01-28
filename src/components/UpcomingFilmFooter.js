import React, { Component } from 'react';
import footerData from '../data/footerData';

class UpcomingFilmFooter extends Component{
  render(){
    return(
      <a href={footerData[this.props.country]}>
      <h1>View More Upcoming Releases >> </h1>
      </a>
    )
  }
}

export default UpcomingFilmFooter;
