import PropTypes from 'prop-types';

import './styles.css';

export function Panel({ children }) {
  return <div className="panel">{children}</div>;
}

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
