import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    render () {
        return (
            <div className="ui container">
                <div>App</div>
                <SearchBar />
            </div>
        );
    }
}

export default App