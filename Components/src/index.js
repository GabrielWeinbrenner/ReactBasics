import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author = {faker.name.findName()} 
                    timeAgo="Today at 3:30  PM"
                    content= {faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>    
                <CommentDetail 
                    author = {faker.name.findName()} 
                    timeAgo="Today at 2:00AM"
                    content= {faker.random.words()}
                />
            </ApprovalCard>
        </div>
    ); 
}
reactDOM.render(<App />, document.querySelector("#root"));