import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import * as api from '../services/api';
import styles from './App.module.css';

const mapper = arr => {
  return arr.map(
    ({
      webformatURL: webURL,
      largeImageURL: largeURL,
      id,
      comments,
      likes,
      views,
      downloads,
    }) => ({
      webURL,
      largeURL,
      id,
      likes,
      comments,
      views,
      downloads,
    }),
  );
};

export default class App extends Component {
  state = {
    list: [],
    query: '',
    counter: 2,
    error: null,
  };

  componentDidMount() {
    const { query } = this.state;

    api
      .fetchData(query)
      .then(({ data }) => {
        this.setState({ list: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }));
  }

  componentDidUpdate() {
    if (this.state.list.length > 12) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });

    api
      .fetchData(query)
      .then(({ data }) => {
        this.setState({ list: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }));
  };

  loadMore = () => {
    const { query, counter } = this.state;
    this.setState(state => ({ counter: state.counter + 1 }));

    api
      .fetchData(query, counter)
      .then(({ data }) => {
        this.setState(state => ({
          list: [...state.list, ...mapper(data.hits)],
        }));
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { list, error } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm handleSubmit={this.handleSubmit} />
        {list.length > 0 && (
          <Gallery onClick={this.handleOpenModal} items={list} />
        )}
        {error && <h2>Sorry, something bad's happened...</h2>}
        {list.length > 0 && (
          <button
            onClick={this.loadMore}
            className={styles.button}
            type="button"
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}
