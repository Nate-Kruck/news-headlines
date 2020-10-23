import React from 'react';
import { 
  render,
  cleanup,
  screen
} from '@testing-library/react';
import ArticleList from '../Articles/ArticleList';

describe('ArticleList Testing', () => {
  afterEach(() => cleanup());
  
  it('render an ArticleList', () => {
    const articles = [
      {
        source: 'source',
        title: 'title1',
        author: 'Bertholomule',
        content: 'Grab your torch and pitch forks',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
      {
        source: 'source',
        title: 'title2',
        author: 'Bertholomule',
        content: 'Grab your torch and pitch forks',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
      {
        source: 'source',
        title: 'title3',
        author: 'Bertholomule',
        content: 'Grab your torch and pitch forks',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
    ];
    const { asFragment } = render(<ArticleList articles={articles} />);

    const allTitles = screen.getAllByText('Grab your torch and pitch forks');

    expect(allTitles.length).toEqual(3);
  
    expect(asFragment()).toMatchSnapshot();
  });
});
