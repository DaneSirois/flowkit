// Import dependencies:
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// Import styles:
import classes from './Checkbox_style.module.css';

export class Checkbox_component extends Component {
  constructor(props) {
    super(props);
    this.id = `Checkbox-${props.id}`;
  }
  handleCheck = (_event) => {
    const { value, onCheck } = this.props;

    onCheck(value);
  };
  render() {
    const { id, label, value, isChecked, onCheck } = this.props;

    return (
      <div>
        <input id={this.id} type='checkbox' checked={isChecked} value={value} onChange={this.handleCheck} />
        <label htmlFor={this.id}>{label}</label>
      </div>
    );
  };
};

Checkbox_component.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func
};

Checkbox_component.defaultProps = {
  isChecked: false
};

export default Checkbox_component;
