import React, { Component } from 'react';
import './editButton.css'

export default class EditButton extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <button className='edit'>Edit</button>
    )
  }
}