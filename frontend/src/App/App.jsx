import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import SettingsPage from './SettingsPage/SettingsPage';
import './App.scss';

const App = ({ page }) => (
  <div>
    <Navbar />
    <div className="container is-widescreen">
      { page === 'home' && <HomePage />}
      { page === 'settings' && <SettingsPage />}
    </div>
  </div>
);

App.propTypes = {
  page: string.isRequired,
};

const mapStateToProps = ({ app: { page } }) => ({ page });

export default connect(mapStateToProps)(App);
