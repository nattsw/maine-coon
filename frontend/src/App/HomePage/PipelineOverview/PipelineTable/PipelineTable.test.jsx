import moment from 'moment';
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PipelineTable } from './PipelineTable';

afterEach(cleanup);

describe('Pipeline Table', () => {
  const page = {
    showTable: () => document.querySelector('button'),
    clickShowTable: () => fireEvent.click(document.querySelector('button')),
    table: () => document.querySelector('table'),
    columns: () => document.querySelectorAll('th'),
    rows: () => document.querySelectorAll('tbody tr'),
    cell: (row, n) => document.querySelector(`tbody tr:nth-child(${row}) td:nth-child(${n})`),
  };

  const renderComponent = (pipelinesData) => (
    render(<PipelineTable pipelinesData={pipelinesData} />)
  );

  it('shows "Show Table" and does not show the table', () => {
    renderComponent();

    expect(page.showTable()).toHaveTextContent('Show Table');
    expect(page.table()).toBeNull();
  });

  it('shows "Hide Table" and shows the table', () => {
    renderComponent();

    page.clickShowTable();

    expect(page.showTable()).toHaveTextContent('Hide Table');
    expect(page.table()).toBeInTheDocument();
  });

  describe('Table shown', () => {
    const pipelinesData = [
      {
        id: 1, startedAt: '2020-05-22T08:07:55.309Z', duration: 11, status: '111', message: '1 message', user: { name: 'derp1' },
      },
      {
        id: 2, startedAt: '2020-05-22T08:07:55.309Z', duration: 22, status: '222', message: '2 message', user: { name: 'derp2' },
      },
    ];
    beforeEach(() => {
      renderComponent(pipelinesData);

      page.clickShowTable();
    });

    it('shows column headers', () => {
      expect(page.columns()[0]).toHaveTextContent('Started');
      expect(page.columns()[1]).toHaveTextContent('Duration');
      expect(page.columns()[2]).toHaveTextContent('Status');
      expect(page.columns()[3]).toHaveTextContent('User');
      expect(page.columns()[4]).toHaveTextContent('Message');
    });

    it('shows as many rows as there are pipeline data', () => {
      expect(Array.prototype.slice.call(page.rows())).toHaveLength(2);
    });

    it.each([
      [moment('2020-05-22T08:07:55.309Z').format('MMM DD h:mmA'), 1],
      ['11', 2],
      ['111', 3],
      ['derp1', 4],
      ['1 message', 5],
    ])('shows %s at column %s', (text, column) => {
      expect(page.cell(1, column)).toHaveTextContent(text);
    });
  });
});
