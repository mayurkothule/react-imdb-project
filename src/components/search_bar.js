import React,{Component} from 'react';

/*const SearchBar=()=>{
	return <input/>;};*/
	class SearchBar extends Component{

		constructor(props){
			super(props);
			this.state={term:' '};
		}

		render(){
			return(
				<div className="search-bar">
				  Search <input onKeyPress={event=>this.enterKey(event)} ref="newText"/>
			    </div>
			);
		}

		enterKey(e)
		{
			if (e.charCode==13){
				var txt=this.refs.newText.value
				this.setState({txt});
			    this.props.onSearchTermChange(txt);
			}
		}
};

export default SearchBar;