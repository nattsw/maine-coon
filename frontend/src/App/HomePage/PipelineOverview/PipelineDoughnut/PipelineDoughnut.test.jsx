import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chart from 'chart.js';
import { PipelineDoughnut } from './PipelineDoughnut';
import colors from '../../../../Chart/Colors';

jest.mock('chart.js');
jest.mock('../../../../Chart/Colors', () => ({
  red: 'red colour',
  blue: 'blue colour',
  green: 'green colour',
}));

afterEach(cleanup);

describe('Pipeline Doughnut', () => {
  const page = {
    canvas: () => document.querySelector('#pipeline-doughnut-canvas'),
  };

  const renderComponent = (data) => (
    render(<PipelineDoughnut pipelinesData={data} />)
  );

  beforeEach(() => {
    Chart.mockReset();
  });

  it('has a canvas', () => {
    renderComponent();

    expect(page.canvas()).toBeInTheDocument();
  });

  it('renders a chart', () => {
    const data = [
      { status: 'canceled' },
      { status: 'failed' },
      { status: 'success' },
      { status: 'canceled' },
      { status: 'failed' },
      { status: 'canceled' },
    ];

    renderComponent(data);

    expect(Chart).toHaveBeenCalledWith(
      'pipeline-doughnut-canvas',
      {
        data: {
          datasets: [{
            backgroundColor: ['green colour', 'red colour', 'blue colour'],
            borderWidth: 0,
            data: [1, 2, 3],
          }],
          labels: ['success', 'failed', 'canceled'],
        },
        options: { cutoutPercentage: 70, legend: { display: false } },
        type: 'doughnut',
      },
    );
  });
});
