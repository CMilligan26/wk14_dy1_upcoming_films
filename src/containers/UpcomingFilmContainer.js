import React, { Component } from 'react';
import UpcomingFilmHeader from '../components/UpcomingFilmHeader';
import UpcomingFilmList from '../components/UpcomingFilmList';
import UpcomingFilmFooter from '../components/UpcomingFilmFooter';
import filmData from '../data/filmData';

class UpcomingFilmContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "UK",
      films: filmData
    }
    this.setCountry = this.setCountry.bind(this);
  }

  setCountry(event){
    this.setState(
      {country: event.target.value }
  );
  }

  render(){
    return (
      <>
      <label className = "Label" for="country-select">Select Country</label>
      <select className = "Select" id="country-select" onChange={(event) => this.setCountry(event)}>
      <option value="UK">UK</option>
      <option value="US">US</option>
      </select>
      <UpcomingFilmHeader country={this.state.country}/>
      <UpcomingFilmList films={this.state.films[this.state.country]}/>
      <UpcomingFilmFooter country={this.state.country}/>
      </>
    );
  };
};

export default UpcomingFilmContainer;
