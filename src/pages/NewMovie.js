import React, { Component } from 'react';
import { Redirect } from 'react-router';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
// import movieData from '../services/movieData';

class NewMovie extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(createMovie) {
    await movieAPI.createMovie(createMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  } 
}

export default NewMovie;
