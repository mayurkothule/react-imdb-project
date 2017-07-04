import React from 'react';

const MovieDetail=({movie})=>{

	if(!movie){
		return <div>Loading...</div>;
	}
  
	return(

		<div className="video-detail col-md-8">
			<div className="embed-responsive-embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={movie.Poster}></iframe>
			</div>

			<div className="details">
				<div>Title : {movie.Title}</div>
				<div>Actors :{movie.Actors}</div>
				<div>Type : {movie.Type}</div>
				<div>Year of Release : {movie.Year}</div>
				<div>Awards: {movie.Awards}</div>
				<div>Country: {movie.Country}</div>
				<div>Language:{movie.Language}</div>
				<div>Released:{movie.Released}</div>
				<div>Writer:{movie.Writer}</div>

			</div>
		</div>

		);


};
export default MovieDetail;