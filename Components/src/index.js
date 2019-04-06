import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author = {faker.name.findName()} 
                timeAgo="Today at 3:30  PM"
                content= {faker.random.words()}
            />
            <CommentDetail 
                author = {faker.name.findName()} 
                timeAgo="Today at 2:00AM"
                content= {faker.random.words()}
            />
        </div>
    ); 
}
reactDOM.render(<App />, document.querySelector("#root"));