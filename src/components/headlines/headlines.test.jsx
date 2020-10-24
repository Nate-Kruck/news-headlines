import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TopHeadlines from './headlines';

describe('TopHeadLines component', () => {
  afterEach(() => cleanup());
  it('renders TopHeadlines', () => {
    const { asFragment } = render(<TopHeadlines
      headlines={[
        {
          sourceId: 'cnn',
          sourceName: 'CNN',
          description: 'some text',
          sourceURL: 'http://placeholder.com/headlines'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
