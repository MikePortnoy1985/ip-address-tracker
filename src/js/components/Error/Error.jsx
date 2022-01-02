import PropTypes from 'prop-types';

import './styles.css';

export function Error({ message }) {
  return <div className="error">{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: '',
};
