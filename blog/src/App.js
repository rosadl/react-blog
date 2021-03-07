import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import List from './components/List';
import New from './components/New';
import Menu from './components/Menu';
import React from 'react';
import {PostsProvider} from './context/PostsContext.jsx'
import Details from './components/Details';

function App() {
  return (
      <PostsProvider>
          <BrowserRouter>
            <Menu />
            <div className="App">
              <Switch>
                <Route path="/all" exact component={List} />
                <Route path="/all/new" exact component={New} />
                  <Route path="/all/details/:id" exact component={Details}></Route>
                <Redirect from="/" to="/all" />
              </Switch>
            </div>
          </BrowserRouter>
      </PostsProvider>
  );
}

export default App;
