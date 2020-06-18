import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleInput = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;

    this.props.handleSubmit(value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form className={styles.searchForm} onSubmit={this.onSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={value}
          onChange={this.handleInput}
          placeholder="Search images..."
        />
      </form>
    );
  }
}
