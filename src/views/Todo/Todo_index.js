// Import dependencies:
import React, { Component } from 'react';

// Import partials:
import Navbar_partial from '@partials/Navbar/Navbar_index';
import TodoList_partial from '@partials/TodoList/TodoList_index';

// Import classes:
import classes from './Todo_style.module.css';

// Define view:
class Todo_view extends Component {
  render() {
    return (
      <div className={classes.TodoPage_wrapper}>
        <Navbar_partial />
        <header className={classes.TodoPage_introduction}>
          <h1 className={classes.TodoPage_introduction_heading}>
            Getting started:
          </h1>
        </header>
        <div className={classes.TodoPage_todoList}>
          <TodoList_partial />
        </div>
      </div>
    );
  };
};

export default Todo_view;
