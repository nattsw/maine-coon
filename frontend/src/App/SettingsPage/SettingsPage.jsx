import React from 'react';
import TokenInput from './Token/TokenInput';
import ProjectsDropdown from './ProjectsDropdown/ProjectsDropdown';
import GetPipelinesButton from './GetPipelinesButton/GetPipelinesButton';

const SettingsPage = () => (
  <div className="settings-page container">
    <TokenInput />
    <ProjectsDropdown />
    <GetPipelinesButton />
  </div>
);

export default SettingsPage;
