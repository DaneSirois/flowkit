// Import dependencies:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { RI } from 'npm-redux-interfaces';

// Import components:
import Checkbox_component from '@components/Checkbox/Checkbox_index';

// Import styles:
import classes from './TodoItem_style.module.css';

class TodoItem_module extends Component {
  handleCheck = (item) => {
    if (item.completed) {
      RI.todo.UNCHECK_ITEM(item.id);
    } else {
      RI.todo.CHECK_ITEM(item.id);
    }
  };
  render() {
    const { id, item, onCheck } = this.props;

    return (
      <li className={classes.TodoItem_wrapper}>
        <Checkbox_component
          isChecked={item.completed}
          id={id}
          label={item.task}
          value={item}
          onCheck={this.handleCheck}
        />
      </li>
    );
  };
};

TodoItem_module.propTypes = {
  item: PropTypes.object
};

export default TodoItem_module;
