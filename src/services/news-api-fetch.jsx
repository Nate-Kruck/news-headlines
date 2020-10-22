// eslint-disable-next-line max-len
export const getTopHeadlines = keyword => {
  return fetch(`
  https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_KEY}
  `)
    .then(res => res.json())
    .then(json => json.articles)
    .then(articles => articles.map(article => ({
      id: article.source.id,
      source: article.source,
      title: article.title,
      author: article.author,
      content: article.content,
      url: article.url
    })));
};
  
