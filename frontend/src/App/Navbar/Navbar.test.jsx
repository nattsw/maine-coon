import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NavbarComponent } from './Navbar';

afterEach(cleanup);

describe('Navbar', () => {
  let mockGoSettings;
  let mockGoHome;

  const page = {
    title: () => document.querySelector('.navbar-title'),
    home: () => document.querySelector('.navbar-item:nth-child(2)'),
    settings: () => document.querySelector('.navbar-item:nth-child(3)'),
  };

  const renderComponent = () => render(
    <Provider store={configureStore([thunk])({})}>
      <NavbarComponent goSettings={mockGoSettings} goHome={mockGoHome} />
    </Provider>,
  );

  beforeEach(() => {
    mockGoSettings = jest.fn();
    mockGoHome = jest.fn();
  });

  it('shows the project name', () => {
    renderComponent();

    expect(page.title()).toHaveTextContent('hipe');
  });

  it('goes home when home is clicked', () => {
    renderComponent();

    expect(page.home()).toHaveTextContent('Home');

    fireEvent.click(page.home());

    expect(mockGoHome).toHaveBeenCalled();
  });

  it('goes to settings when settings is clicked', () => {
    renderComponent();

    expect(page.settings()).toHaveTextContent('Settings');

    fireEvent.click(page.settings());

    expect(mockGoSettings).toHaveBeenCalled();
  });
});
