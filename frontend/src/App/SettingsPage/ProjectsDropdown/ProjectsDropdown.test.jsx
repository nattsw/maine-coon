import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProjectsDropdown } from './ProjectsDropdown';

afterEach(cleanup);

describe('Projects Dropdown', () => {
  let mockGetProjects;
  let mockSetProjectId;

  const page = {
    dropdown: () => document.querySelector('select'),
    options: () => document.querySelectorAll('option'),
    button: () => document.querySelector('button'),
  };

  const renderComponent = (token, projects, projectId) => render(
    <ProjectsDropdown
      getProjects={mockGetProjects}
      token={token}
      projects={projects}
      projectId={projectId}
      setProjectId={mockSetProjectId}
    />,
  );


  beforeEach(() => {
    mockGetProjects = jest.fn();
    mockSetProjectId = jest.fn();
  });

  describe('Select', () => {
    it('lists projects with first as "None"', () => {
      const projects = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ];

      renderComponent(undefined, projects);

      fireEvent.click(page.dropdown());

      expect(page.options()[0]).toHaveTextContent('None');
      expect(page.options()[1]).toHaveTextContent('a');
      expect(page.options()[2]).toHaveTextContent('b');
    });

    it('selects the project with the id', () => {
      const projects = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ];

      renderComponent(undefined, projects, 2);

      expect(page.dropdown().selectedIndex).toEqual(2);
    });

    it('sets the project id of the selected option', () => {
      const projects = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
      ];

      renderComponent('token', projects);

      expect(mockSetProjectId).not.toHaveBeenCalled();
      fireEvent.change(page.dropdown(), { target: { value: '2' } });

      expect(mockSetProjectId).toHaveBeenCalledWith('2');
    });
  });

  describe('Button', () => {
    it('disables the button when token is not provided', () => {
      renderComponent();

      expect(page.button()).toHaveAttribute('disabled');
    });

    it('gets projects when clicked', () => {
      renderComponent('token');

      expect(mockGetProjects).not.toHaveBeenCalled();
      fireEvent.click(page.button());

      expect(mockGetProjects).toHaveBeenCalled();
    });
  });
});
