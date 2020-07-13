import React from 'react';
import './blogdummy.css'
function Blog() {
  return (
    <div className='blog'>
      <div className='imgandtitlecontainer'>
        <p className='img'></p>
        <div classname='image and title'>
          <h1>Title</h1>
          <h3>author</h3>
        </div>
      </div>
      <p className='content'>Content</p>
    </div>
  );
}

export default Blog;