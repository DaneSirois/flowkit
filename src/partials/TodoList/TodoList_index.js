// Import dependencies:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { RI } from 'npm-redux-interfaces';

// Import modules:
import TodoItem_module from '@modules/TodoItem/TodoItem_index';

// Import styles:
import classes from './TodoList_style.module.css';

class TodoList_partial extends Component {
  renderTodoItems = (todoItems) => {
    return todoItems.map((item) => {
      const key = `TodoItem-${item.id}`;

      return (
        <TodoItem_module id={key} key={key} item={item} />
      );
    });
  };

  render() {
    const { todoItems } = this.props;
    const items = todoItems.reduce((acc, item) => {
      if (item.completed) {
        acc.complete.push(item);
      } else {
        acc.incomplete.push(item);
      }
      return acc;
    }, { incomplete: [], complete: [] });

    return (
      <div className={classes.TodoList_wrapper}>
        <section className={classes.TodoList_incomplete}>
          <h2>Todo:</h2>
          <ul className={classes.TodoList_ul}>
          {this.renderTodoItems(items.incomplete)}
          </ul>
        </section>
        <section className={classes.TodoList_complete}>
          <h2>Completed:</h2>
          <ul className={classes.TodoList_ul}>
            {this.renderTodoItems(items.complete)}
          </ul>
        </section>
      </div>
    );
  };
};

TodoList_partial.propTypes = {
  todoItems: PropTypes.array
};

function mapStateToProps() {
  return ({
    todoItems: RI.todo.items().getState()
  });
};

export default connect(mapStateToProps)(TodoList_partial);
