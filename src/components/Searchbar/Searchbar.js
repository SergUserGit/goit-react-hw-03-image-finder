import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button className={css.searchFormButton} type="submit">
            <AiOutlineSearch className={css.icon} size={16} />
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            className={css.searchFormInput}
            value={this.state.imageName}
            onChange={this.handleChange}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
