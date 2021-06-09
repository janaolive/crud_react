import React, { Component } from 'react';
import Loading from '../components/Loading';
import movieData from '../services/movieData';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      detailMovie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.movieDetail();
  }

  async movieDetail() {
    const detail = await movieAPI.getMovie();
    this.setState({ detailMovie: detail, loading: false });
  }

  render() {
    const { detailMovie, loading } = this.state;
    const { movie } = this.props;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

// MovieDetails.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieDetails;
