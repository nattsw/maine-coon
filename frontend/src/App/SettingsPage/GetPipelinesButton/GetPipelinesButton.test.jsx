import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GetPipelinesButtonComponent } from './GetPipelinesButton';

afterEach(cleanup);

describe('Get Pipelines Button', () => {
  let mockGetPipelinesData;

  const page = {
    button: () => document.querySelector('button'),
  };

  beforeEach(() => {
    mockGetPipelinesData = jest.fn();
  });

  const renderComponent = (id, token) => render(
    <GetPipelinesButtonComponent
      projectId={id}
      token={token}
      getPipelinesData={mockGetPipelinesData}
    />,
  );

  it('shows text', () => {
    renderComponent();

    expect(page.button())
      .toHaveTextContent('Get Pipelines Data');
  });

  it('disables button if no id', () => {
    renderComponent(undefined, 'token');

    expect(page.button()).toHaveAttribute('disabled');
  });

  it('disables button if no token', () => {
    renderComponent('id');

    expect(page.button()).toHaveAttribute('disabled');
  });

  it('gets pipelines data', () => {
    renderComponent('has id', 'token');

    fireEvent.click(page.button());

    expect(mockGetPipelinesData).toHaveBeenCalledWith();
  });
});
