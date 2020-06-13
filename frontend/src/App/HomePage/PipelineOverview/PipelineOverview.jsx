import React from 'react';
import PipelineChart from './PipelineChart/PipelineChart';
import PipelineDoughnut from './PipelineDoughnut/PipelineDoughnut';
import PipelineTable from './PipelineTable/PipelineTable';
import './PipelineOverview.scss';

const PipelineOverview = () => (
  <div className="pipeline-overview">
    <div className="pipeline-graphs">
      <div className="pipeline-chart-container">
        <PipelineChart />
      </div>
      <div className="pipeline-doughnut-container">
        <PipelineDoughnut />
      </div>
    </div>
    <PipelineTable />
  </div>

);

export default PipelineOverview;
