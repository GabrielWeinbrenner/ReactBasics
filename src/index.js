// Import the React and ReactDOM libraries 

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component => produces HTML to show the user (using JSX) and handles feedback from the 
// user (using Event Handlers) 

const App = () => {
    return <div>Hi There!</div>;
}

// Take the react component and show it on the screen 

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);