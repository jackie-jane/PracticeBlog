import React, { Component } from 'react';
import './titleAuthor.css'
export default class TitleAuthor extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='titleAuthor'>
        <h1>Title</h1>
        <h3>Author</h3>
      </div>
    )
  }
}