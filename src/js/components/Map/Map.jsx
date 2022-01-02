import PropTypes from 'prop-types';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import marker from '../../../assets/icon-location.svg';

import 'leaflet/dist/leaflet.css';
import './styles.css';

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const newMarker = new L.Icon({
  iconUrl: marker,
  popupAnchor: [0, 0],
  iconSize: [46, 56],
});

export function Map({ position }) {
  return (
    <MapContainer
      className="map"
      zoom={13}
      center={position}
      zoomControl={false}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={newMarker}>
        <Popup>Current location</Popup>
      </Marker>
      <ChangeMapView coords={position} />
    </MapContainer>
  );
}

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
