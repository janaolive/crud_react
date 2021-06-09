import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const loadingElement = <span>Carregando...</span>;
    return (
      <div>{ loadingElement }</div>
    );
  }
}

export default Loading;
