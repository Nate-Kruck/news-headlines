import React, { Component } from 'react';
import { getArticles } from '../Services/news-api-fetch';
import Loading from '../Components/Loading/Loading';
import Search from '../Components/Search/Search';
import ArticleList from '../Components/Articles/ArticleList';

export default class AllArticles extends Component {
  state = {
    searchWord: '',
    articles: [],
    loading: false
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
    const { articles, loading, searchWord } = this.state;
    
    return (
      <div>
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
      </div>
    );
  }
}
