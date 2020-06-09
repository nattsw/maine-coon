import React from 'react';
import './Navbar.scss';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { goToAppHome, goToAppSettings } from '../AppStore';

export const NavbarComponent = ({ goHome, goSettings }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item navbar-title">hipe</div>
      <div className="navbar-item" role="button" tabIndex="0" onKeyPress={() => goHome()} onClick={() => goHome()}>Home</div>
      <div className="navbar-item" role="button" tabIndex="0" onKeyPress={() => goSettings()} onClick={() => goSettings()}>Settings</div>
    </div>
  </nav>
);

NavbarComponent.propTypes = {
  goHome: func.isRequired,
  goSettings: func.isRequired,
};

const mapDispatchToProps = {
  goHome: goToAppHome,
  goSettings: goToAppSettings,
};

export default connect(null, mapDispatchToProps)(NavbarComponent);
