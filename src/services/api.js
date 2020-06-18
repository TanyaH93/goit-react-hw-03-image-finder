/* es-lint disable*/

import axios from 'axios';

export const fetchData = (query, page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=13104574-e8726bf8ce5565d5dafca0a13`,
  );
};
