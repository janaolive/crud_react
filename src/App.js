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
        <Switch>
          <div>
            <h1 className="page-title ">Movie Card Library CRUD</h1>
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route exact path="/" component={ MovieList } />
            <Route path="*" component={ NotFound } />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
