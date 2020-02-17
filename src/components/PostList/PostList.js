import React, { Component } from 'react';
import axios from 'axios';
import styles from './Posts.module.scss';

export default class PostList extends Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts ')
      .then(response => {
        this.setState({ posts: response.data })
      }
      )
  }

  render() {
    const posts = this.state.posts.map(elem => {
      return (
        <div className={styles.Post} key={elem.id}>
          <h3>{elem.id}</h3>
          <p>{elem.body}</p>
        </div>
      )
    })
    return (
      <div>
        <h1>Post List</h1>
        {posts}
      </div>
    )
  }
}
