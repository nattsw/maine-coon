import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chart from 'chart.js';
import { PipelineChart } from './PipelineChart';
import colors from '../../../../Chart/Colors';

jest.mock('chart.js');
jest.mock('../../../../Chart/Colors', () => ({
  red: 'red colour',
  blue: 'blue colour',
  green: 'green colour',
}));

afterEach(cleanup);

describe('Pipeline Chart', () => {
  const page = {
    canvas: () => document.querySelector('#pipeline-line-canvas'),
  };

  const renderComponent = (data) => (
    render(<PipelineChart pipelinesData={data} />)
  );

  beforeEach(() => {
    Chart.mockReset();
  });

  it('has a canvas', () => {
    renderComponent();

    expect(page.canvas()).toBeInTheDocument();
  });

  it('renders a chart', () => {
    const pipelineData = [
      { status: 'success', startedAt: '2020-12-25T09:00:01.000Z', duration: 400 },
      { status: 'not success', duration: 1 },
      { status: 'success', startedAt: '2020-12-25T09:00:02.000Z', duration: 401 },
      { duration: null, status: 'success' },
      { status: 'success', startedAt: '2020-12-25T09:00:03.000Z', duration: 402 },
      { status: 'success', startedAt: '2020-12-25T09:00:04.000Z', duration: 403 },
    ];

    renderComponent(pipelineData);

    expect(Chart).toHaveBeenCalledWith(
      'pipeline-line-canvas',
      {
        type: 'line',
        data: {
          datasets: [
            {
              data: [
                { x: '2020-12-25T09:00:01.000Z', y: 400 },
                { x: '2020-12-25T09:00:02.000Z', y: 401 },
                { x: '2020-12-25T09:00:03.000Z', y: 402 },
                { x: '2020-12-25T09:00:04.000Z', y: 403 },
              ],
              backgroundColor: 'transparent',
              pointBackgroundColor: ['green colour'],
              pointBorderColor: ['green colour'],
              pointRadius: 1.5,
              borderColor: colors['gitlab-yellow'],
            },
          ],
        },
        options: {
          aspectRatio: 2,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            }],
            xAxes: [{
              type: 'time',
              distribution: 'linear',
              bounds: 'data',
              ticks: {
                source: 'data',
                autoSkip: true,
                maxRotation: 0,
                display: false,
              },
              time: {
                displayFormats: {
                  minute: 'DD-MM HH:mm',
                },
                parser: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
                unit: 'minute',
              },
              gridLines: {
                display: false,
              },
            }],
          },
        },
      },
    );
  });
});
