import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TokenInput } from './TokenInput';

afterEach(cleanup);

describe('Token Input', () => {
  let mockSetToken;

  const page = {
    label: () => document.querySelector('.label'),
    input: () => document.querySelector('.input'),
  };

  const renderComponent = (token) => {
    render(<TokenInput token={token} setToken={mockSetToken} />);
  };

  beforeEach(() => {
    mockSetToken = jest.fn();
  });

  it('shows label "Token"', () => {
    renderComponent();

    expect(page.label()).toHaveTextContent('Token');
  });

  it('sets the value if provided', () => {
    renderComponent('the token');

    expect(page.input()).toHaveValue('the token');
  });

  it('sets the token on change', () => {
    renderComponent();

    fireEvent.change(page.input(), { target: { value: '123' } });

    expect(mockSetToken).toHaveBeenCalledWith('123');
  });
});
