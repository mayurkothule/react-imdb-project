import React from 'react';
const MovieListItem=({movie,onMovieSelect,idSelected})=>{
	
	const imageUrl=movie.Poster;
 	return(
 		<li onClick={()=> { onMovieSelect(movie),idSelected(movie.imdbID)} } className="list-group-item">
 		  <div className="video-list-media">
 		  	<div className="media-left" >
 		  		<img className="media-object" src={imageUrl}/>
 		  	</div>
 		  	<div className="media-body">
 		  		<div className="media-heading">{movie.Title}</div>
 		  	</div>
 		  </div>
 		 </li>
 		);

};
export default MovieListItem;	