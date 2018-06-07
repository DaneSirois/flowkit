// Import dependencies:
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { routeTo } from '@routes/index.js';

// Import classes:
import classes from './Logo_style.module.css';

// Import assets:
import logo from '@assets/logo.svg';

class Logo_module extends Component {
  handleClick = () => {
    routeTo('/');
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={logo} className={classes.Logo_image} alt="logo" />
      </div>
    );
  };
};

export default Logo_module;
