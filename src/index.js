import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Enrique"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Yoselin"
                    timeAgo="Today at 4:48PM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jose"
                    timeAgo="Today at 4:50PM"
                    content="I like the wrting"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Norma"
                    timeAgo="Today at 4:55PM"
                    content="I like run"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))