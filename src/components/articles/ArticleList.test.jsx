import React from 'react';
import { 
  render,
  cleanup,
  screen
} from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList Testing', () => {
  afterEach(() => cleanup());
  
  it('render an ArticleList', () => {
    const articles = [
      {
        title: 'title1',
        author: 'Bertholomule',
        description: 'Hey friends',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
      {
        title: 'title2',
        author: 'Bertholomule',
        description: 'Hey friends',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
      {
        title: 'title3',
        author: 'Bertholomule',
        description: 'Hey friends',
        imageUrl: 'http://placeholder.com/articles',
        url: 'nate-kruck.com',
      },
    ];
    const { asFragment } = render(<ArticleList articles={articles} />);

    const allDescriptions = screen.getAllByText('Hey friends');

    expect(allDescriptions.length).toEqual(3);
  
    expect(asFragment()).toMatchSnapshot();
  });
});
