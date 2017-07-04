import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList=(props)=>{

	if(!props.movies.Search){
		return <div>Loading...</div>;
	}

 
	const MovieItems=props.movies.Search.map((movie)=>{
		return(
			<MovieListItem onMovieSelect={props.onMovieSelect} key={movie.imdbID} movie={movie} idSelected={props.idSelected} />
			);
	});

	return(
		<ul className="col-md-4-list-group">
			{MovieItems}
		</ul>
		);
};

export default MovieList;