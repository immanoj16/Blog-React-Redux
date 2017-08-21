import css from './scss/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './js/reducers';
import PostsIndex from './js/components/PostsIndex'
import PostsNew from './js/components/PostsNew'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={PostsIndex} />
        <Route path='/posts/new' component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
