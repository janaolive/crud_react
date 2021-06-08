import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.listMovies();
  }

  async listMovies() {
    const films = await movieAPI.getMovies();
    this.setState({ movies: films, loading: false });
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;

    if (loading === true) {
      return <p>{ loadingElement }</p>;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
