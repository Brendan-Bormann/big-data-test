import React, {Component} from 'react';
import './MovieCard.css';

class MovieCard extends Component {

    state = {
        title: this.props.movie.title,
        releaseDate: this.props.movie.release_date,
        overview: this.props.movie.overview,
        revenue: this.props.movie.revenue,
        budget: this.props.movie.budget,
        profit: this.props.movie.revenue - this.props.movie.budget
    }

    render() {
        return (
            <div className="movie-card">
                <p className="movie-title">
                    {this.state.title} 
                </p>
                <span>Number: {this.props.count}</span>
                <p className="movie-release">
                    Released: {this.state.releaseDate}
                </p>
                <p className="movie-overview">
                    {this.state.overview}
                </p>
                <p className="movie-revenue">
                    Revenue: ${this.state.revenue.toLocaleString()}
                </p>
                <p className="movie-budget">
                    Budget: ${this.state.budget.toLocaleString()}
                </p>
                <p className="movie-profit">
                    Profit: ${this.state.profit.toLocaleString()}
                </p>
            </div>
        );
    }
}

export default MovieCard;
