import React from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import AddPost from './components/AddPost/AddPost';

function App() {
  return (
    <div className="App">
      <AddPost/>
      <PostList />
    </div>
  );
}

export default App;
