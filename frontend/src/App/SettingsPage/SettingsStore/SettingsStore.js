import axios from 'axios';

const initialState = {
  gitlabApiUrl: 'https://gitlab.com/api/v4/',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'settings/private-token/update':
      return { ...state, token: action.state };
    case 'settings/projects/update':
      return { ...state, projects: action.state };
    case 'settings/project-id/update':
      return { ...state, projectId: action.state };
    case 'settings/pipelines-data/update':
      return { ...state, pipelinesData: action.state };
    case 'settings/gitlab-api-url/update':
      return { ...state, gitlabApiUrl: action.state };
    default:
      return state;
  }
};

export default reducer;

export const setSettingsAPIPrivateToken = (token) => (dispatch) => {
  dispatch({
    type: 'settings/private-token/update',
    state: token,
  });
};

export const getSettingsProjects = () => async (dispatch, getState) => {
  const { token, gitlabApiUrl: baseURL } = getState().settings;
  const projects = (await axios.get(`/projects?visibility=private&private_token=${token}`, { baseURL })).data;
  dispatch({
    type: 'settings/projects/update',
    state: projects,
  });
};

export const setSettingsProjectId = (project) => (dispatch) => {
  dispatch({
    type: 'settings/project-id/update',
    state: project,
  });
};

export const getSettingsPipelinesData = () => async (dispatch, getState) => {
  const { token, gitlabApiUrl: baseURL, projectId } = getState().settings;

  const details = await Promise
    .all((await axios
      .get(`/projects/${projectId}/pipelines?scope=finished&private_token=${token}&per_page=100`, { baseURL }))
      .data
      .map(async ({ id }) => (await axios.get(`/projects/${projectId}/pipelines/${id}?private_token=${token}`, { baseURL })).data));
  const detailsWithMessage = await Promise
    .all(details
      .map(async ({ sha, ...data }) => {
        const commit = (await axios
          .get(`/projects/${projectId}/repository/commits/${sha}?private_token=${token}`, { baseURL })).data;
        return ({ ...data, message: commit.message });
      }));
  const filtered = detailsWithMessage.map(({
    id, started_at: startedAt, duration, status, message, user,
  }) => (
    {
      id, startedAt, duration, status, message, user,
    }
  ));

  dispatch({
    type: 'settings/pipelines-data/update',
    state: filtered,
  });
};

export const setSettingsGitlabAPIUrl = (url) => (dispatch) => {
  dispatch({
    type: 'settings/gitlab-api-url/update',
    state: url,
  });
};
