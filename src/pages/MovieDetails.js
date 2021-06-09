import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
// import movieData from '../services/movieData';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      detailMovie: {},
      loading: true,
    };

    this.movieDetail = this.movieDetail.bind(this);
  }

  componentDidMount() {
    this.movieDetail();
  }

  async movieDetail() {
    const { match: { params: { id } } } = this.props;
    const detail = await movieAPI.getMovie(id);
    this.setState({ detailMovie: detail, loading: false });
  }

  render() {
    const { loading } = this.state;
    const {
      detailMovie: {
        id, title, subtitle, storyline, imagePath, genre, rating },
    } = this.state;

    if (loading === true) {
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
  detailMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
