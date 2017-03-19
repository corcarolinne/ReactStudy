import React, { Component } from 'react';
import Comment from './Comment.js'

class CommentBox extends Component {

  constructor(){
    super();

    this.state = {
        showComments: false
    }

  }

  _getComments() {

    const commentList = [
      {id: 1, author: "Wagner Horta", body: "I Love React!" },
      {id: 2, author: "Carolinne Cordeiro", body: "<3"}
    ];

    return commentList.map((comment) => {
      return (
        <Comment
          author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }

  _handleClick() {
    this.setState( {
      showComments: !this.state.showComments
    });
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = "Show comments";
    if (this.state.showComments) {
      buttonText = "Hide comments";
      commentNodes = <div className="comment-list">
        {comments}
      </div>
    }
    return (
      <div className="comment-box">
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        <h3>Comments</h3>
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  }
}

export default CommentBox;
