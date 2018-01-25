import React, {Component} from 'react';
import './Main.css';
import Data from '../../DataSets/tmdb_5000_movies.csv/movies.json';
import MovieCard from '../MovieCard/MovieCard';

function dataFarm(amount) {
	var response = [];
	for (var i=0;i<amount;i++) {
		response.push(Data[i]);
	}
	return response;
}

var count = 0;

function counter() {
	count++;
	return count;
}

class Main extends Component {

	holder = dataFarm(Data.length);

	state = {
		value: "hello",
		number: 0,
	}

	render() {
		return (
			<div>
				<p>{this.state.value}</p>
				<br />
					{this.holder.map((movie) => {return (<MovieCard movie={movie} count={counter()} />)})
				}
			</div>
		);
	}
}

export default Main;
