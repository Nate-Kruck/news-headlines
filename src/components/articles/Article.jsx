import React from 'react';
import PropTypes from 'prop-types';
import styles from '../articles/Articles.css';

function Article({ article }) {
  return (
    <div className={styles.Article}>
      <h1 data-testid="article">{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired
};

export default Article;
