import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ items, modalIsOpen, onClick }) => (
  <ul className={styles.gallery}>
    {items.map(item => (
      <li key={item.id}>
        <PhotoCard {...item} modalIsOpen={modalIsOpen} onClick={onClick} />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
