import React, { Component } from 'react';
import CommentBox from './CommentBox.js'
import './App.css';

class StoryBox extends Component {
  render() {
    return (
      <div>
        <CommentBox></CommentBox>
      </div>
    );
  }
}

export default StoryBox;
