import React, { Component } from 'react';
import TitleAuthor from '../titleAuthor/titleAuthor';
import EditButton from '../EditButton/editButton';
import DeleteButton from '../DeleteButton/deleteButton';
import Image from '../Image/image'
import Content from '../Content/content'
import './blog.css'

class Blog extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <main>
        <div className='blog'>
          <div className='container'>
            <Image />
            <TitleAuthor />
          </div>
          <Content />
          <div className='container'>
            <EditButton />
            <DeleteButton />
          </div>
        </div>

      </main>
    );
  }
}
export default Blog;