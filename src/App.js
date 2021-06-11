import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="page-title ">Movie Card Library CRUD</h1>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
            <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// Principais dúvidas: passagem de props para diferentes componentes, sintaxes, abstração, passo a passo para concluir cada página.
// Para conclusão dos requisitos, foi necessário muita pesquisa.
// Fontes pesquisadas:
// https://pt-br.reactjs.org/
// https://developer.mozilla.org/pt-BR/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
// https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/129
// https://github.com/tryber/sd-011-project-movie-card-library-crud/pull/103