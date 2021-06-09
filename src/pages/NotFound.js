import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>data-testid="404-error" Página não encontrada</h1>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default NotFound;
