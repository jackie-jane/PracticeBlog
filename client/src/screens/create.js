import React, { Component } from 'react'

class create extends Component {
  constructor() {
    super()
    this.state = {
      blogs: {
        title: '',
        author: '',
        image: '',
        content: '',
        created: '',

      },
      created: false
    }
  }
  render() {
    const { blogs, created } = this.state

    if (created) { 
      return <Redirect to ={`blogs`} />
    }

    return (
      <Layout>
      
      </Layout>  
        
    
    )
  }
}

export default create