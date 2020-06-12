import React from 'react';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import { setSettingsAPIPrivateToken } from '../SettingsStore/SettingsStore';

export const TokenInput = ({ token, setToken }) => (
  <div className="token-input field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Token</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            type="text"
            name="token"
            value={token}
            className="input"
            placeholder="Token"
            onChange={(e) => {
              setToken(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

TokenInput.propTypes = {
  token: string,
  setToken: func.isRequired,
};

TokenInput.defaultProps = {
  token: '',
};


const mapStateToProps = ({ settings: { token } }) => ({
  token,
});

const mapDispatchToProps = {
  setToken: setSettingsAPIPrivateToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenInput);
