import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PipelineOverview from './PipelineOverview';

afterEach(cleanup);

describe('Pipeline Overview', () => {
  const page = {
    lineChart: () => document.querySelector('#pipeline-line-canvas'),
    doughnut: () => document.querySelector('#pipeline-doughnut-canvas'),
    table: () => document.querySelector('.pipeline-table'),
  };

  const renderComponent = () => render(
    <Provider store={configureStore([thunk])({ settings: {} })}>
      <PipelineOverview />
    </Provider>,
  );

  it('shows graphs', () => {
    renderComponent();

    expect(page.lineChart()).toBeInTheDocument();
    expect(page.doughnut()).toBeInTheDocument();
  });

  it('shows table', () => {
    renderComponent();

    expect(page.table()).toBeInTheDocument();
  });
});
