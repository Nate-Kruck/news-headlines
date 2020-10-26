import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

/* Line:15 I added target="_blank" rel="norferrer" 
  the later has to be added for security purposes */
function Article({ article }) {
  return (
    <div className={styles.mainGrid}>
      <li className={styles.Article}>
        <span className={styles.title}>
          <h1 data-testid="article">{article.title}</h1>
        </span>
        <span className={styles.imageContainer}>
          <a href={article.url} target="_blank" rel="noreferrer">
            <img src={article.imageUrl} alt={article.title} />
          </a>
        </span>
        <p className={styles.author}>{article.author}</p>
        <p className={styles.description}>{article.description}</p>
      </li>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Article;
