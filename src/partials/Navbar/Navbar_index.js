// Import dependencies:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { RI } from 'npm-redux-interfaces';

// Import modules:
import Logo_module from '@modules/Logo/Logo_index';

// Import components:
import Header_component from '@components/Header/Header_index';

// Import styles:
import classes from './Navbar_style.module.css';

class Navbar_partial extends Component {
  render() {
    return (
      <div className={classes.Navbar_wrapper}>
        <Header_component
          centerSlot={
            <Logo_module />
          }
        />
      </div>
    );
  };
};

export default Navbar_partial;
