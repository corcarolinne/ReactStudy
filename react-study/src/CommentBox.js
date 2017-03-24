import React, { Component } from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

class CommentBox extends Component {

  constructor(){
    super();

    this.state = {
        showComments: false,
        comments: [
          {id: 1, author: "Wagner Horta", body: "I Love React!" },
          {id: 2, author: "Carolinne Cordeiro", body: "<3"}
        ]
    }

  }

  _getComments() {

    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id}
          onDelete={this._deleteComment.bind(this)} />
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

  _addComment (author, body) {
    const comment = { author, body };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }

  _deleteComment(comment) {
    const comments = [...this.state.comments];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);
    this.setState({ comments });
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
        <CommentForm addComment={this._addComment.bind(this)} />
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
