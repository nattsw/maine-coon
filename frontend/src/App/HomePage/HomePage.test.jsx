import React from 'react';
import thunk from 'redux-thunk';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';

afterEach(cleanup);

describe('Home Page', () => {
  it('shows the pipeline overview', () => {
    render(
      <Provider store={configureStore([thunk])({ settings: {} })}>
        <HomePage />
      </Provider>,
    );

    expect(document.querySelector('.pipeline-overview'))
      .toBeInTheDocument();
  });
});
