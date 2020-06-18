import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

export default class PhotoCard extends Component {
  state = { isOpen: false };

  static propTypes = {
    webURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    largeURL: PropTypes.string.isRequired,
  };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { webURL, likes, views, comments, downloads, largeURL } = this.props;

    return (
      <div className={styles.photoCard}>
        <img src={webURL} alt="" />

        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          onClick={this.handleOpenModal}
          className={styles.fullscreenButton}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isOpen && (
          <Modal largeURL={largeURL} handleCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
