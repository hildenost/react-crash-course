import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import AddMovie from './AddMovie';

import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: initialMovies
        };

        this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
        this.addMovieToGallery = this.addMovieToGallery.bind( this );
        this.deleteMovieFromGallery = this.deleteMovieFromGallery.bind( this );
    }

  render() {
    return (
      <div className="App">
	<Header text="Discover Your Movie Mojo!" />
          <p className="App-intro">
              Sharing a few of our favourite movies
          </p>
          <div className="movies">
          {
              Object
                .keys(this.state.movies)
                .map(key => <Movie key={key} id={key} meta={this.state.movies[key]} deleteMovie={this.deleteMovieFromGallery}/>)
          }
          </div>
          <div className="add-movies">
              <button onClick={this.loadAdditionalMovies}>Load more...</button>
          </div>
          <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }

    loadAdditionalMovies() {
        var currentMovies = { ...this.state.movies };
        var newMovies = Object.assign( currentMovies, additionalMovies );

        this.setState({ movies: newMovies });
    }

    addMovieToGallery( movie) {
        var ts = Date.now();
        var newMovie = {};
        newMovie[ 'movie' + ts ] = movie;
        var currentMovies = { ...this.state.movies };
        var newMovies = Object.assign( currentMovies, newMovie );
        this.setState({ movies: newMovies });
    }

    deleteMovieFromGallery( movie ) {
        var currentMovies = { ...this.state.movies };
        delete currentMovies[movie];
        this.setState( {movies: currentMovies});
    }
}

export default App;
