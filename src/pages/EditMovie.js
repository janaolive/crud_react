import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate() {
    this.movieDetail();
  }

  async handleSubmit(updatedMovie) {
    const response = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: response, shouldRedirect: true });
  }

  async movieDetail() {
    const { match: { params: { id } } } = this.props;
    const detail = await movieAPI.getMovie(id);
    this.setState({ movie: detail, status: null });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    if (status === 'loading') {
      return <Loading />;
    }
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
