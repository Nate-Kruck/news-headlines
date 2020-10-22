import React from 'react';
import PropTypes from 'prop-types';
import styles from '../articles/AppArticle.css';
import Article from '../articles/Article';

function ArticleList({ articles }) {
  const articleElements = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));
  return (
    <div className={styles.articles}>
      <ul>{articleElements}</ul>
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })).isRequired
};

export default ArticleList;
