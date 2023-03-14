import css from './Button.module.css';
import React, { Component } from 'react';

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

export default Button;
