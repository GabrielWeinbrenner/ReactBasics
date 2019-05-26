import React from 'react'; 


class SearchBar extends React.Component {
    state = {
        term: ''
    };
    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term);
        // Once the form is submitted this calls the function whenSubmit
        this.props.whenSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={(event) =>{ console.log(event); this.onFormSubmit(event)}} className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            <input type="text" 
                                value = {this.state.term} 
                                //Continously establishes the term everytime it changes
                                onChange= {(e) => {console.log(this.state.term); this.setState({ term: e.target.value })}}
                             />
                        </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
