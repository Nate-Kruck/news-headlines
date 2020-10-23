import React from 'react';
import PropTypes from 'prop-types';
import styles from './Articles.css';
import Article from '../../Components/Article/Article';

function ArticleList({ articles }) {
  const ArticleElements = articles.map(article => (
    <Article key={article.title} article={article}/>
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
