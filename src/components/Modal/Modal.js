import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  state = {};

  createdRefs = React.createRef();

  static propTypes = {
    largeURL: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEscape);
    console.log(this.createdRefs);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseEscape);
  }

  handleCloseEscape = e => {
    if (e.key !== 'Escape') return;
    this.props.handleCloseModal();
  };

  handleCloseClick = e => {
    const { current } = this.createdRefs;

    if (current !== e.target) return;
    this.props.handleCloseModal();
  };

  render() {
    const { largeURL } = this.props;

    return (
      <div
        ref={this.createdRefs}
        className={styles.overlay}
        onClick={this.handleCloseClick}
      >
        <div className={styles.modal}>
          <img src={largeURL} alt="" />
        </div>
      </div>
    );
  }
}
