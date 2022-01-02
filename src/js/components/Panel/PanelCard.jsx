import PropTypes from 'prop-types';

export function PanelCard({ title, info }) {
  return (
    <div className="panel-card">
      <div className="panel-card__title">{title}</div>
      <div className="panel-card__info">{info}</div>
    </div>
  );
}

PanelCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
