import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../../../Chart/Colors';

export const PipelineDoughnut = ({ pipelinesData }) => {
  const data = pipelinesData.reduce((acc, { status }) => {
    acc[status] += 1;
    return acc;
  },
  { success: 0, failed: 0, canceled: 0 });

  useEffect(() => {
    new Chart('pipeline-doughnut-canvas', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [data.success, data.failed, data.canceled],
          backgroundColor: [colors.green, colors.red, colors.blue],
          borderWidth: 0,
        }],
        labels: ['success', 'failed', 'canceled'],
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 70,
      },
    });
  }, [data, colors]);

  return <canvas id="pipeline-doughnut-canvas" />;
};

PipelineDoughnut.propTypes = {
  pipelinesData: arrayOf(shape({
    status: string.isRequired,
  })),
};

PipelineDoughnut.defaultProps = {
  pipelinesData: [],
};

const mapStateToProps = ({ settings: { pipelinesData } }) => ({
  pipelinesData,
});

export default connect(mapStateToProps)(PipelineDoughnut);
