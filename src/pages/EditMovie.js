import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor({ match }) {
    super({ match });

    this.state = {
      id: match.params.id,
      detailMovie: {
        title: [],
        subtitle: [],
        storyonLine: [],
        rating: '0',
      },
      status: 'loading',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieDetail = this.movieDetail.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.movieDetail(id);
  }

  async handleSubmit(updatedMovie) {
    const response = await movieAPI.updateMovie(updatedMovie);
    this.setState(({ detailMovie: response, shouldRedirect: true }));
  }

  async movieDetail(id) {
    const detail = await movieAPI.getMovie(id);
    this.setState({ detailMovie: detail, status: 'null' });
  }

  render() {
    const { status, shouldRedirect, detailMovie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ detailMovie } onSubmit={ this.handleSubmit } />
        <button type="submit" className="links">
          <Link to="/">VOLTAR</Link>
        </button>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
