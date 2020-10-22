import React from 'react';
import PropTypes from 'prop-types';
import styles from '../articles/Articles.css';
import Article from '../articles/Article';

function ArticleList({ articles }) {
  console.log(articles);
  const ArticleElements = articles.map(article => (
    <Article key={article.source} article={article}/>
  ));

  return (
    <div className={styles.articles}>
      <ul>{ArticleElements}</ul>
    </div>
  );
}

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
