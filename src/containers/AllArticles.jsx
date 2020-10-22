import React, { Component } from 'react';
import { getTopHeadLines } from '../services/news-api-fetch';
import Loading from '../components/loading/Loading';
import Search from '../components/search/Search';
import ArticleList from '../components/articles/ArticleList';

export default class AllArticles extends Component {
  state = {
    searchWord: '',
    articles: [],
    loading: false
  }
  
  handleSearch = () => {
    this.setState({ loading: true });

    getTopHeadLines(this.state.searchWord)
      .then(articles => this.setState({ articles, loading: false }));
  }

  handleChange = ({ target }) => {
    this.setState({ [ target.name ]: target.value });

    console.log(target.name);
  }

  render() {
    const { articles, loading, searchWord } = this.state;
    
    return (
      <div>
        <Search 
          onChange={this.handleChange}
          searchWord={searchWord}
        />
        <button onClick={this.handleSearch}>Next</button>
        {
          loading ?
            <Loading /> :
            <ArticleList 
              articles={articles} />
        }
      </div>
    );
  }
}
