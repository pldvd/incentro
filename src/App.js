import React from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import AddPost from './components/AddPost/AddPost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailedView from './components/DetailedView/DetailedView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:id" component={DetailedView}></Route>
          <Route path="/" render={() => {
            return (
              <div>
                <AddPost />
                <PostList />
              </div>
            )
          }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
