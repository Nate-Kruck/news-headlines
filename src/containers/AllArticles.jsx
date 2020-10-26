import React, { Component } from 'react';
import { getArticles } from '../Services/news-api-fetch';
import Loading from '../components/Loading/Loading';
import Search from '../components/Search/Search';
import ArticleList from '../components/Articles/ArticleList';
import Header from '../components/Header/Header';
import styles from '../components/Article/Article.css';

export default class AllArticles extends Component {
  state = {
    searchWord: '',
    articles: [],
    loading: false,
    curTime: new Date().toLocaleString()
  }
  
  handleSearch = () => {
    this.setState({ loading: true });

    getArticles(this.state.searchWord)
      .then(articles => this.setState({ articles, loading: false }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchWord: target.value });

  }


  render() {
    const { articles, loading, searchWord, curTime, weather } = this.state;
    
    return (
      <>
        <Header />
        <div className={styles.time}>
          <p>{weather}</p>
          <p>{curTime}</p>
        </div>
        <Search 
          onChange={this.handleChange}
          searchWord={searchWord}
        />
        <button onClick={this.handleSearch}>Get News</button>
        {
          loading ?
            <Loading /> :
            <ArticleList 
              articles={articles} />
        }
      </>
    );
  }
}
