import React from 'react';
import {
  arrayOf, func, number, shape, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { getSettingsProjects, setSettingsProjectId } from '../SettingsStore/SettingsStore';

export const ProjectsDropdown = ({
  token, projects, projectId, setProjectId, getProjects,
}) => (
  <div className="projects-dropdown field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Projects</label>
    </div>
    <div className="field-body">
      <div className="field has-addons">
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                name="projects"
                value={projectId}
                onChange={({ target: { options, selectedIndex } }) => {
                  const selectedId = options[selectedIndex].value;
                  setProjectId(selectedId);
                }}
              >
                <option value={null}>None</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>{project.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="control">
            <button
              type="submit"
              className="button"
              disabled={!token}
              onClick={() => getProjects()}
            >
              Get Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProjectsDropdown.propTypes = {
  token: string,
  projects: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
  })),
  projectId: number,
  setProjectId: func.isRequired,
  getProjects: func.isRequired,
};

ProjectsDropdown.defaultProps = {
  token: null,
  projectId: undefined,
  projects: [],
};

const mapStateToProps = ({
  settings: {
    token, gitlabApiUrl, projects, projectId,
  },
}) => ({
  token, baseURL: gitlabApiUrl, projects, projectId,
});

const mapDispatchToProps = {
  setProjectId: setSettingsProjectId,
  getProjects: getSettingsProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsDropdown);
