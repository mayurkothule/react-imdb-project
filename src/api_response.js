import React,{Component} from 'react';

	class ApiResponse extends Component{
		 render(){
    console.log(this.props.results)
    return (
        <div>
            <h1 classType="character-name">{this.props.results/*This is where im stuck*/}</h1>
        </div>
    )
  }

};

export default ApiResponse;

----------------------------------------------------


<button type="button" onClick={event=>this.receive()}>click</button>
			 <button type="button" onClick={event=>this.myData()}>check</button>

import React,{Component} from 'react';
import ReactDOM from 'react-dom';



var url='http://www.omdbapi.com/?t=veer&y=&plot=short&r=json';

console.log(url);


class App extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],	
		};
		
	}
	
	render(){
		return (<div>
		hello

		<iframe className="embed-responsive-item" src={url}></iframe>
		</div>
			);
	}
	
}

ReactDOM.render(<App/>,document.querySelector('.container'));