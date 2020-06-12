import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import SettingsPage from './SettingsPage';

afterEach(cleanup);

describe('Settings Page', () => {
  const page = {
    tokenInput: () => document.querySelector('.token-input'),
    projectsDropdown: () => document.querySelector('.projects-dropdown'),
    getPipelinesButton: () => document.querySelector('.get-pipelines-button'),
  };

  const renderComponent = () => render(
    <Provider store={configureStore([thunk])({ settings: {} })}>
      <SettingsPage />
    </Provider>,
  );

  it('shows the token input', () => {
    renderComponent();

    expect(page.tokenInput())
      .toBeInTheDocument();
  });

  it('shows the projects dropdown', () => {
    renderComponent();

    expect(page.projectsDropdown())
      .toBeInTheDocument();
  });

  it('shows the get pipelines button', () => {
    renderComponent();

    expect(page.getPipelinesButton())
      .toBeInTheDocument();
  });
});
