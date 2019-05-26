import React from 'react';

class SearchBar extends React.Component {
    /* turning it into a controlled input rather than uncontrolled */
    /* Hooking up the input into the state of SearchBar */
    /* the onChange value is apart of the input tag */
    state = { input: ''} ;

    inputChange = (event) => {
        /* event.target.value = the value that is in the searchbar when changed */
        this.setState({input: event.target.value})
    };
    /* The reason this is an arrow function a call back because it is passing the value into some child object */
    formSubmit = (event) =>{
        // Does not refresh page
        event.preventDefault();

        /* Makes sure we call callback from parent component */
    };
    render(){
        return (
        <div className="search-bar ui segment">
            {/* When the user submits the form is in control of handling submissions */}
            <form onSubmit={this.formSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={this.state.term} type="text" onChange={this.inputChange} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;