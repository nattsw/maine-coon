import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';

afterEach(cleanup);

describe('Home Page', () => {
  it('shows the pipeline overview', () => {
    render(<HomePage />);

    expect(document.querySelector('.pipeline-overview'))
      .toBeInTheDocument();
  });
});
