import PropTypes from 'prop-types';
import { Input } from 'js/Input';

import './styles.css';

export function Header({ disabled, handleUserPosition }) {
  return (
    <div className="header">
      <div className="title">IP Address Tracker</div>
      <Input disabled={disabled} handleUserPosition={handleUserPosition} />
    </div>
  );
}

Header.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleUserPosition: PropTypes.func.isRequired,
};
