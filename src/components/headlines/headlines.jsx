/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const TopHeadlines = ({ headlines }) => {
  const headlineElements = headlines.map(headline => (
    <li key={headline.sourceId}>
      {/* <Link to={`/details/${headlines.sourceId}`}>
        
      </Link> */}
    </li>
  ));

  return (
    <ul data-tesid="headlines">
      {headlineElements}
    </ul>
  );
};

TopHeadlines.propTypes = {
  headlines: PropTypes.arrayOf(PropTypes.shape({
    sourceId: PropTypes.string.isRequired,
    sourceName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sourceURL: PropTypes.string.isRequired
  }))
};

export default TopHeadlines;
