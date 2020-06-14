import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../../../Chart/Colors';

export const PipelineChart = ({ pipelinesData }) => {
  const inputDateFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  const data = pipelinesData
    .filter((p) => p.duration !== null && p.status === 'success')
    .map(({
      startedAt, duration,
    }) => ({
      x: startedAt, y: duration,
    }));
  useEffect(() => {
    new Chart('pipeline-line-canvas', {
      type: 'line',
      data: {
        datasets: [
          {
            data,
            backgroundColor: 'transparent',
            pointBackgroundColor: [colors.green],
            pointBorderColor: [colors.green],
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
              parser: inputDateFormat,
              unit: 'minute',
            },
            gridLines: {
              display: false,
            },
          }],
        },
      },
    });
  }, [data, [colors.green], colors, inputDateFormat]);

  return <canvas id="pipeline-line-canvas" />;
};

PipelineChart.propTypes = {
  pipelinesData: arrayOf(shape({
    status: string.isRequired,
  })),
};

PipelineChart.defaultProps = {
  pipelinesData: [],
};

const mapStateToProps = ({ settings: { pipelinesData } }) => ({
  pipelinesData,
});

export default connect(mapStateToProps)(PipelineChart);
