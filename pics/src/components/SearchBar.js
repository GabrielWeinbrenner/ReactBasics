import React from 'react'; 


class SearchBar extends React.Component {
    // construct(props){
    //     super(props);
    // }
    onInputChange(event){
        console.log(event);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                        <div className="field">
                            <label>Image Search</label>
                            <input type="text" onChange={this.onInputChange} onClick={() => console.log("Input Clicked")}/>
                        </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;