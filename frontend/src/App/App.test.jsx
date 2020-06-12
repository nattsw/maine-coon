import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  const mockStore = configureStore([thunk]);

  const renderComponent = (pageProp) => render(
    <Provider store={mockStore({ app: { page: pageProp }, settings: {} })}>
      <App />
    </Provider>,
  );

  it('shows navbar', () => {
    renderComponent('');

    expect(document.querySelector('.navbar'))
      .toBeInTheDocument();
  });

  describe('Pages', () => {
    const pages = {
      home: 'home-page',
      settings: 'settings-page',
    };

    it.each(['home', 'settings'])('renders the %s page', (pageProp) => {
      renderComponent(pageProp);

      for (let i = 0; i < Object.entries(pages).length; i++) {
        const [page, className] = Object.entries(pages)[i];

        if (page === pageProp) {
          expect(document.querySelector(`.${className}`))
            .toBeInTheDocument();
        } else {
          expect(document.querySelector(`.${className}`))
            .not.toBeInTheDocument();
        }
      }
    });
  });
});
