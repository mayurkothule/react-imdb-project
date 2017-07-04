import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/movie_list';
import MovieDetail from './components/movie_detail';
import SearchBar from './components/search_bar';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			movies:[],
			moviesWithDetails:[],
			selectedMovie:null
		};

		this.getMoviesByName('harry');
		this.getMoviesById('tt4379500');
	}
	
	render(){

		return (
		<div className="main">
		     <SearchBar onSearchTermChange={term=>this.getMoviesByName(term)}/>
			 <MovieDetail movie={this.state.moviesWithDetails}/>
			 <MovieList
			       onMovieSelect={selectedMovie=>this.setState({selectedMovie})}
			       movies={this.state.movies}
			       idSelected={id=>this.getMoviesById(id)} />

		</div>
			);
	}

     getMoviesById(id){
		 $.ajax({
            url: 'http://www.omdbapi.com/?i='+id+'&y=&plot=full&r=json',
            success: function (data) {
            	console.log(data);
            	 this.setState({
                	moviesWithDetails: data});
            }.bind(this)
        });
	}
	
	getMoviesByName(term){
		 $.ajax({
            url: 'http://www.omdbapi.com/?s='+term+'&y=&plot=full&r=json',
            success: function (data) {
                this.setState({
                	movies: data,
                    selectedMovie:data.Search[0]});

            }.bind(this)
        });


	}
	
	
}

ReactDOM.render(<App/>,document.querySelector('.container'));