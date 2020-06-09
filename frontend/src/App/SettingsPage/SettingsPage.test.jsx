import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SettingsPage from './SettingsPage';

afterEach(cleanup);

describe('Settings Page', () => {
  const page = {
    tokenInput: () => document.querySelector('.token-input'),
    projectsDropdown: () => document.querySelector('.projects-dropdown'),
    getPipelinesButton: () => document.querySelector('.get-pipelines-button'),
  };

  it('shows the token input', () => {
    render(<SettingsPage />);

    expect(page.tokenInput())
      .toBeInTheDocument();
  });

  it('shows the projects dropdown', () => {
    render(<SettingsPage />);

    expect(page.projectsDropdown())
      .toBeInTheDocument();
  });

  it('shows the get pipelines button', () => {
    render(<SettingsPage />);

    expect(page.getPipelinesButton())
      .toBeInTheDocument();
  });
});
