import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PipelineOverview from './PipelineOverview';

afterEach(cleanup);

describe('Pipeline Overview', () => {
  const page = {
    lineChart: () => document.querySelector('#pipeline-line-canvas'),
    doughnut: () => document.querySelector('#pipeline-doughnut-canvas'),
    table: () => document.querySelector('table.pipeline-table'),
  };

  const renderComponent = () => render(<PipelineOverview />);

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
