// Import dependencies:
import { Route } from 'react-router';
import React from 'react';

// Export router:
export default (views, routeHandlers) => (
  <Route
    name='todo'
    path='todo'
    component={views.Todo_view}
    onEnter={routeHandlers.todo.handleEnter}
  />
);
