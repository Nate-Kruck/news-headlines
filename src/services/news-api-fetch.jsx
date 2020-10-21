export const getTopHeadlines = () => {
  // eslint-disable-next-line max-len
  return fetch('http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=73fc28300ed540c7a9f2d7ca27c9c398')
    .then(res => res.json())
    .then(json => json.map(articles => ({
      sourceId: articles.source.id,
      sourceName: articles.source.name,
      description: articles.source.description,
      sourceURL: articles.source.url
    })));
};
