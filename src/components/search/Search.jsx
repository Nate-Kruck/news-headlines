import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

function Search({ searchWord, onChange }) {
  return (
    <div id={styles.Search}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        name="search"
        value={searchWord}
        onChange={onChange}
      />
    </div>
  );
}

Search.propTypes = {
  searchWord: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
