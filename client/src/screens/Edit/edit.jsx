import React, { Component } from 'react';
import Blog from '../../components/Edit/Blog/blog'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      img: '',
      content: ''
    }
    updateMode: false
    updated: false
  }
  async componentDidMount() {
    try {
      let { id } = this.props.match.params
      const res = await ;
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