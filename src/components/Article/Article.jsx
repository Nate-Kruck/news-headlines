import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

/* Line:15 I added target="_blank" rel="norferrer" 
  the later has to be added for security purposes */
function Article({ article }) {
  return (
    <li className={styles.Article}>
      <div>
        <h1 data-testid="article">{article.title}</h1>
        <p>{article.source}</p>
        <p>{article.author}</p>
      </div>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        <img src={article.imageUrl} alt={article.title} />
      </a>
    </li>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Article;
