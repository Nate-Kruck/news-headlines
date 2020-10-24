import React from 'react';
import { 
  render,
  cleanup,
  screen
} from '@testing-library/react';
import Article from './Article';

describe('Article Testing', () => {
  afterEach(() => cleanup());
  
  it('render an Article', () => {
    const article = {
      title: 'some text',
      author: 'Bertholomule',
      description: 'Hey friends',
      imageUrl: 'http://placeholder.com/articles',
      url: 'nate-kruck.com'
    };
    const { asFragment } = render(<Article article={article} />);

    screen.getByText('some text');

    expect(asFragment()).toMatchSnapshot();
  });
});
