import React, { Component } from 'react';
import Blog from '../../components/Edit/Blog/blog'
import axios from 'axios'

class Edit extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    try {
      const res = await axios('https://practiceblogorange.herokuapp.com/api/blogs');
      console.log(res)
    } catch (error) {
      console.log(`this is you ${error}`)
    }
  }
    render() {
      return (
        <>
          <Blog />
        </>
      );
    }
  }
  export default Edit;