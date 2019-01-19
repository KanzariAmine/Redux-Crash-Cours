import React, { Component } from 'react'
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post)

  }
  render() {
    return (
      <div>
        <h1>Add Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <input type="text" name="body" onChange={this.handleChange} value={this.state.body} />
          </div>
          <br />
          <div>
            <button>Add Post</button>
          </div>
        </form>
      </div>
    )
  }
}

PostForm.PropType = {
  createPost: PropType.func.isRequired,
}
export default connect(null, { createPost })(PostForm)