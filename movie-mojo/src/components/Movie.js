import React, { Component } from 'react';

class Movie extends Component {
    deleteMovie(e, moviekey) {
        e.preventDefault();
        this.props.deleteMovie( moviekey );
    }

    render() {
        const movie = this.props.meta;
        console.log(this.props);
        return (
            <div className="movie">
                <button onClick={(e) => this.deleteMovie(e, this.props.id)}>Delete Movie</button>
                <h2>{ movie.title }</h2>
                <div><img width="200" src={ movie.poster } /></div>
                <p>({ movie.year })</p>
                <p>{ movie.description }</p>
            </div>
        );
    }
}

export default Movie;
