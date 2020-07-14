import React, { Component } from 'react';
import './deleteButton.css'

export default class DeleteButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button className='edit'>Delete</button>
    )
  }
}