// eslint-disable-next-line max-len
export const getArticles = (keyword) => {
  return fetch(`
  https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_KEY}
  `)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      id: article.source.id,
      title: article.title,
      author: article.author,
      description: article.description,
      imageUrl: article.urlToImage,
      url: article.url
    })));
};
  
