// Import dependencies:
import React, { Component } from 'react';
import { RI } from 'npm-redux-interfaces';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import partials:
import Navbar_partial from '@partials/Navbar/Navbar_index';

// Import classes:
import classes from './Todo_style.module.css';

// Define view:
class Todo_view extends Component {
  render() {
    return (
      <div className={classes.Todo_wrapper}>
        <Navbar_partial />
        Hello world
      </div>
    );
  };
};

Todo_view.propTypes = {
  todoItems: PropTypes.array
};

function mapStateToProps() {
  return ({
    todoItems: RI.todo.items().getState()
  });
};

export default connect(mapStateToProps)(Todo_view);
