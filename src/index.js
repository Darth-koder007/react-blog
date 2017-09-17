/**
 * Vendor imports
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Custom imports
 */
import PostsIndex from './components/posts_index';
import reducers from "./reducers";
import styles from '../style/style.scss';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

/**
 * Render function call
 */
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
   </Provider>,
    document.querySelector('.container')
  );
