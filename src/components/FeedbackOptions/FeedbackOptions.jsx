import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

class FeedbackOptions extends Component {
  static defaultProps = {
    goodIncrement: PropTypes.func.isRequired,
    NeutralIncrement: PropTypes.func.isRequired,
    badIncrement: PropTypes.func.isRequired,
  };

  static propTypes = {};

  render() {
    return (
      <Button>
        <button type="button" onClick={this.props.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.props.NeutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.props.badIncrement}>
          Bad
        </button>
      </Button>
    );
  }
}

export default FeedbackOptions;