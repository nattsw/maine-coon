import moment from 'moment';
import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import './PipelineTable.scss';

export const PipelineTable = ({ pipelinesData }) => {
  const [showTable, setShowTable] = useState(false);
  return (
    <div className="pipeline-table">
      <button
        type="button"
        className="button is-small"
        onClick={() => setShowTable(!showTable)}
      >
        {showTable ? 'Hide' : 'Show'}
        {' '}
        Table
      </button>
      {showTable && (
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Started</th>
              <th>Duration</th>
              <th>Status</th>
              <th>User</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {
                pipelinesData.map(({
                  id, startedAt, duration, status, message, user,
                }) => (
                  <tr key={id}>
                    <td>{moment(startedAt).format('MMM DD h:mmA')}</td>
                    <td>{duration}</td>
                    <td>{status}</td>
                    <td>{user.name}</td>
                    <td>{message}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

PipelineTable.propTypes = {
  pipelinesData: arrayOf(shape({
    status: string.isRequired,
  })),
};

PipelineTable.defaultProps = {
  pipelinesData: [],
};

const mapStateToProps = ({ settings: { pipelinesData } }) => ({
  pipelinesData,
});

export default connect(mapStateToProps)(PipelineTable);
