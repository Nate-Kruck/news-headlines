import React from 'react';
import PropTypes from 'prop-types';
import styles from '../articles/Articles.css';

const Article = ({ title, author, content }) => (
  <div className={styles.Article}>
    <h1>{title}</h1>
    <p>{author}</p>
    <p>{content}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
