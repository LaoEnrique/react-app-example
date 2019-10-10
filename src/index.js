import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Enrique" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post"
                avatar={faker.image.avatar()}
            />      
            <CommentDetail 
                author="Yoselin" 
                timeAgo="Today at 4:48PM" 
                content="I like the subject"
                avatar={faker.image.avatar()}
            />      
            <CommentDetail author="Jose" 
                timeAgo="Today at 4:50PM" 
                content="I like the wrting"
                avatar={faker.image.avatar()}
            />      
            <CommentDetail 
                author="Norma" 
                timeAgo="Today at 4:55PM" 
                content="I like run"
                avatar={faker.image.avatar()}
            />               
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))