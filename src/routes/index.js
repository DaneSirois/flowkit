// Import Dependencies:
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { RI } from 'npm-redux-interfaces';
import React from 'react';

// Import handlers:
import routeHandlers from './handlers/index.js';

// Import routers:
import Todo_router from './Todo_router';

// Import views:
import Todo_view from '@views/Todo/Todo_index';

// Import root component:
import App from '../App';

// Add views:
const views = {
  Todo_view
};

// Define route switcher:
export const routeTo = function (route) {
  browserHistory.push(route);
};

// Export router:
export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={views.Todo_view} />
      {Todo_router(views, routeHandlers)}
    </Route>
  </Router>
);
