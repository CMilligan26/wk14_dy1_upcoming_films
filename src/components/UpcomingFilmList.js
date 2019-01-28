import React, { Component } from 'react';
import UpcomingFilm from './UpcomingFilm';

class UpcomingFilmList extends Component{
  render(){
    const films = this.props.films.map((film) => {
      return (
        <UpcomingFilm key={ film.id } filmName = {film.name} filmLink = { film.url }/>
      );
    });

    return(
      <>
      { films }
      </>
    )
  }
}

export default UpcomingFilmList;
