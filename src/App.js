// Import dependencies:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RI } from 'npm-redux-interfaces';
import PropTypes from 'prop-types';

class App extends Component {
  renderView = () => {
    const { isLoading, children } = this.props;

    if (isLoading) {
      return <h1>Loading App..</h1>
    }

    return <div>{children}</div>;
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  };
};

App.propTypes = {
  isLoading: PropTypes.bool
};

function mapStateToProps() {
  return ({
    isLoading: RI.app.loading().getState()
  });
};

export default connect(mapStateToProps)(App);
