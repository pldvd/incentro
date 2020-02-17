import React, { Component } from 'react';
import axios from 'axios';
import styles from './Posts.module.scss';
import { withRouter } from 'react-router-dom';

class PostList extends Component {

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

  handleClick = (e) => {
    const postId = e.currentTarget.getAttribute('data-id');
    this.props.history.push(`/${postId}`);
  }

  render() {
    const posts = this.state.posts.map(elem => {
      return (
        <div className={styles.Post} key={elem.id} data-id={elem.id} onClick={e => this.handleClick(e)}>
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

export default withRouter(PostList)