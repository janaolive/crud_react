import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      id: match.params.id,
      detailMovie: [],
      loading = true,
    };

    this.movieDetail = this.movieDetail.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.movieDetail(id);
  }

  async movieDetail(id) {
    const detail = await movieAPI.getMovie(id);
    this.setState({ detailMovie: detail, loading: false });
  }

  render() {
    const { detailMovie, id, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = detailMovie;
    
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img
          className="movie-card-image-detail"
          alt="Movie Cover"
          src={ `../${imagePath}` }
        />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="submit" className="links">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="submit" className="links">
          <Link to="/">VOLTAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  // movie: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   subtitle: PropTypes.string.isRequired,
  //   storyline: PropTypes.string.isRequired,
  //   genre: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  // }).isRequired,
};

export default MovieDetails;
