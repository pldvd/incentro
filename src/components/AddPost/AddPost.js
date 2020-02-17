import React, { useState } from 'react';
import axios from 'axios';

export default function AddPost() {

  const [postTitle, setPostTitle] = useState(null);
  const [postBody, setPostBody] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      postTitle,
      postBody
    }

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => console.log(response));
  }

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  }

  const handlePostBodyChange = (e) => {
    setPostBody(e.target.value);
  }

  return (
    <div>
      <h1>Submit New Post</h1>
      <form method="/" onSubmit={handleSubmit}>
        <label htmlFor="title">Add a post title</label>
        <input type="text" name="title" id="title" placeholder="Add title" onChange={e => handleTitleChange(e)} />
        <label htmlFor="body">Add post body text</label>
        <input type="text" name="body" id="body" placeholder="Add post body" onChange={e => handlePostBodyChange(e)} />
        <input type="submit" />
      </form>
    </div>
  )
}
