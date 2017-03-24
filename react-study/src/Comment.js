import React, { Component } from 'react';

class Comment extends Component {

  _handleDelete(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      this.props.onDelete(this.props.comment);
    }
  }

  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-footer">
          <a href="#" onClick={this._handleDelete.bind(this)}>
            Delete comment
          </a>
        </div>
      </div>
    );
  }
}

export default Comment;
