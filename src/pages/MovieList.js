import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.listMovies = this.listMovies.bind(this);
  }

  componentDidMount() {
    this.listMovies();
  }

  async listMovies() {
    const films = await movieAPI.getMovies();
    this.setState({ movies: films, loading: false  });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }
    
    return (
      <div data-testid="movie-list">
        <div>
          <button type="submit" className="link-add-card">
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </button>
        </div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
