import css from './Button.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  loadClick = () => {
    this.props.onSubmit();
  };

  render() {
    return (
      <button onClick={this.loadClick} className={css.buttonLoadeMore}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
