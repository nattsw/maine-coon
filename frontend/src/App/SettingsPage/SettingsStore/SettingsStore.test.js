import { when } from 'jest-when';
import axios from 'axios';
import reducer, {
  setSettingsAPIPrivateToken,
  setSettingsGitlabAPIUrl,
  getSettingsPipelinesData,
  setSettingsProjectId,
  getSettingsProjects,
} from './SettingsStore';

jest.mock('axios');

describe('Settings Store', () => {
  describe('Reducer', () => {
    it('has a default state', () => {
      const actual = reducer(undefined, {});

      expect(actual).toEqual({
        gitlabApiUrl: 'https://gitlab.com/api/v4/',
      });
    });

    it.each([
      ['settings/private-token/update', 'token', 'value'],
      ['settings/projects/update', 'projects', 'value'],
      ['settings/project-id/update', 'projectId', 'value'],
      ['settings/pipelines-data/update', 'pipelinesData', 'value'],
      ['settings/gitlab-api-url/update', 'gitlabApiUrl', 'value'],
    ])('returns modified state based on %s', (type, expectedProperty, expectedValue) => {
      const originalState = {
        token: 1,
        projects: 2,
        projectId: 3,
        pipelinesData: 4,
        gitlabApiUrl: 5,
      };

      const actual = reducer(originalState, { type, state: expectedValue });

      expect(actual).toEqual({
        ...originalState,
        [expectedProperty]: expectedValue,
      });
    });
  });

  describe.each([
    [setSettingsAPIPrivateToken, 'token', 'settings/private-token/update'],
    [setSettingsProjectId, 'project', 'settings/project-id/update'],
    [setSettingsGitlabAPIUrl, 'url', 'settings/gitlab-api-url/update'],
  ])('%s', (func, input, expectedType) => {
    it(`dispatches ${expectedType}`, () => {
      const mockDispatch = jest.fn();
      func(input)(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: expectedType,
        state: input,
      });
    });
  });

  describe('getSettingsProjects', () => {
    let mockDispatch;
    let mockGetState;

    beforeEach(() => {
      axios.get = jest.fn().mockResolvedValue({});

      when(axios.get)
        .calledWith('/projects?visibility=private&private_token=t0k3n', { baseURL: 'the url' })
        .mockResolvedValueOnce({ data: ['project1', 'project2'] });

      mockDispatch = jest.fn();
      mockGetState = jest.fn().mockReturnValue({
        settings: {
          token: 't0k3n',
          gitlabApiUrl: 'the url',
        },
      });
    });

    it('dispatches projects', async () => {
      await getSettingsProjects()(mockDispatch, mockGetState);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'settings/projects/update',
        state: ['project1', 'project2'],
      });
    });
  });

  describe('getSettingsPipelinesData', () => {
    let mockDispatch;
    let mockGetState;

    beforeEach(() => {
      axios.get = jest.fn().mockResolvedValue({});

      when(axios.get)
        .calledWith('/projects/pId/pipelines?scope=finished&private_token=t0k3n&per_page=100', { baseURL: 'the url' })
        .mockResolvedValueOnce({ data: [{ id: '1' }, { id: '2' }] });

      when(axios.get)
        .calledWith('/projects/pId/pipelines/1?private_token=t0k3n', { baseURL: 'the url' })
        .mockResolvedValueOnce({
          data: {
            sha: 'sha1', status: 'success', started_at: 's_at', user: { name: 'Tomtom' }, duration: 820,
          },
        });
      when(axios.get)
        .calledWith('/projects/pId/pipelines/2?private_token=t0k3n', { baseURL: 'the url' })
        .mockResolvedValueOnce({
          data: {
            sha: 'sha2', status: 'success', started_at: 's_at', user: { name: 'Steaky' }, duration: 1640,
          },
        });

      when(axios.get)
        .calledWith('/projects/pId/repository/commits/sha1?private_token=t0k3n', { baseURL: 'the url' })
        .mockResolvedValueOnce({ data: { message: 'Meow meow meow' } });
      when(axios.get)
        .calledWith('/projects/pId/repository/commits/sha2?private_token=t0k3n', { baseURL: 'the url' })
        .mockResolvedValueOnce({ data: { message: 'MEOW MEOW MEOW MROEOWOW' } });
      mockDispatch = jest.fn();
      mockGetState = jest.fn().mockReturnValue({
        settings: {
          projectId: 'pId',
          token: 't0k3n',
          gitlabApiUrl: 'the url',
        },
      });
    });

    it('dispatches pipelines data that has details and commit message', async () => {
      await getSettingsPipelinesData()(mockDispatch, mockGetState);

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'settings/pipelines-data/update',
        state: [
          {
            status: 'success', startedAt: 's_at', user: { name: 'Tomtom' }, duration: 820, message: 'Meow meow meow',
          },
          {
            status: 'success', startedAt: 's_at', user: { name: 'Steaky' }, duration: 1640, message: 'MEOW MEOW MEOW MROEOWOW',
          },
        ],
      });
    });
  });
});
