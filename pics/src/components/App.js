import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
/*
What we learned about: 
Event handlers and attaining information from forms-- We learned about handling this situations 
we can handle it with an arrow function 
With the prop system we can only communicate with a parent to a child 
*/
class App extends React.Component {
	state = { images: [] };
	//Different ways to solve context issues
	/* constructor(){
		
	} */
	/*
		Turn Function into arrow function because the arrow fucntion always ensures the value of this is equal to the class 
	 */
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term
			},
		});
		this.setState({images: response.data.results});
	}
	render(){
		return (
			<div className="ui container" style={{marginTop: '10px'}}> 
				<SearchBar whenSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images}/>
			</div>
		);
	}
}

export default App;
