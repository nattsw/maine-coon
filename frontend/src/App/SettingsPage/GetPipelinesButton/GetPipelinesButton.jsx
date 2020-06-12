import React from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { getSettingsPipelinesData } from '../SettingsStore/SettingsStore';

export const GetPipelinesButtonComponent = ({
  projectId, token, getPipelinesData,
}) => (
  <div className="get-pipelines-button field is-horizontal">
    <div className="field-label" />
    <div className="field-body">
      <div className="field">
        <div className="control">
          <button
            type="button"
            disabled={projectId === null || token === null}
            className="button is-primary is-light"
            onClick={() => {
              getPipelinesData();
            }}
          >
            Get Pipelines Data
          </button>
        </div>
      </div>
    </div>
  </div>
);

GetPipelinesButtonComponent.propTypes = {
  token: string,
  projectId: string,
  getPipelinesData: func.isRequired,
};

GetPipelinesButtonComponent.defaultProps = {
  token: null,
  projectId: null,
};

const mapStateToProps = ({ settings: { token, gitlabApiUrl, projectId } }) => ({
  token, baseURL: gitlabApiUrl, projectId,
});

const mapDispatchToProps = {
  getPipelinesData: getSettingsPipelinesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GetPipelinesButtonComponent);
