import React from 'react';
import axios from 'axios';

export default function AddPost() {

  const handleSubmit = (formData) => {

  }

  return (
    <div>
      <h1>Submit New Post</h1>
      <form method="/" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Add title" />
        <input type="text" name="body" placeholder="Add post body" />
        <input type="submit" />
      </form>
    </div>
  )
}
