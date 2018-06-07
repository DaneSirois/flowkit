// Import Dependencies:
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import classes:
import classes from './Header_style.module.css';

/*
** A header component for creating the structure of a header bar.
** The header bar has 5 "slots" for positioning content.
*/
class Header_component extends Component {
  static propTypes = {
    leftSlot: PropTypes.object,
    leftInnerSlot: PropTypes.object,
    centerSlot: PropTypes.object,
    rightSlot: PropTypes.object,
    rightInnerSlot: PropTypes.object,
  };

  render() {
    const {
      leftSlot,
      leftInnerSlot,
      centerSlot,
      rightSlot,
      rightInnerSlot,
      backgroundColor,
    } = this.props;

    return (
      <header className={classes.Header} style={backgroundColor}>
        <div className={classes.Header_leftSlot}>
          {leftSlot}
        </div>
        <div className={classes.Header_leftInnerSlot}>
          {leftInnerSlot}
        </div>
        <div className={classes.Header_centerSlot}>
          {centerSlot}
        </div>
        <div className={classes.Header_rightInnerSlot}>
          {rightInnerSlot}
        </div>
        <div className={classes.Header_rightSlot}>
          {rightSlot}
        </div>
      </header>
    );
  };
};

export default Header_component;
