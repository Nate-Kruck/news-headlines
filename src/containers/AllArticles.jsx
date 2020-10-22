import React, { Component } from 'react';
import TopHeadLines from '../components/articles/ArticleList';
import { getTopHeadLines } from '../services/news-api-fetch';
import Loading from '../components/loading/Loading';

export default class AllArticles extends Component {
  state = {
    articles: [],
    loading: false
  }

  componentDidMount() {
    getTopHeadLines()
      .then(articles => {
        this.setState({ articles, loading: false });
      });
  }

  handleSearch = () => {
    this.setState({ loading: true });

    getTopHeadLines()
      .then(articles => this.setState({ articles, loading: false }));
  }

  render() {
    const { articles, loading } = this.state;
    
    return (
      <div>
        <button onClick={this.handleSearch}>Next</button>
        {
          loading ?
            <Loading /> :
            <TopHeadLines articles={articles} />
        }
      </div>
    );
  }
}
