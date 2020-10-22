  
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

function Search({ searchTerm, onChange }) {
  return (
    <div id={styles.Search}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        name="search"
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
