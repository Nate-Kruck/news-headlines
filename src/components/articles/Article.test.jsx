import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TopHeadLines from './ArticleList';

describe.skip('TopHeadLines component', () => {
  afterEach(() => cleanup());
  it('renders TopHeadLines', () => {
    const { asFragment } = render(<TopHeadLines
      article={
        {
          title: 'some text',
          source: 'cnn',
          author: 'Bertholomule',
          content: 'Grab your torch and pitch forks',
          url: 'http://placeholder.com/articles'
        }
      }
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
