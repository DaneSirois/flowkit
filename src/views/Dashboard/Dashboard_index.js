// Import dependencies:
import React, { Component } from 'react';

// Import helpers:
import { routeTo } from '@routes/index';

// Import partials:
import Navbar_partial from '@partials/Navbar/Navbar_index';

// Import classes:
import classes from './Dashboard_style.module.css';

// Define view:
class Dashboard_view extends Component {
  handleChangeRoute = () => {
    routeTo('/todo');
  };
  render() {
    return (
      <div className={classes.Dashboard_wrapper}>
        <Navbar_partial />
        <header className={classes.Dashboard_introduction}>
          <h1 className={classes.Dashboard_introduction_heading}>
            Welcome to Flowkit.
          </h1>
        </header>
        <div className={classes.Dashboard_fetchItems}>
          <button onClick={this.handleChangeRoute}>Fetch Todo items</button>
        </div>
      </div>
    );
  };
};

export default Dashboard_view;
