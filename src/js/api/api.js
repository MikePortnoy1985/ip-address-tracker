import { DEFAULT_POSITION } from '../constants';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

class Api {
  constructor(url, position) {
    this.url = url;
    this.position = position;
    this.emptyField = ' ';
  }

  async getDefaultPosition() {
    const response = await fetch(this.url);
    if (!response.ok) {
      const error = {
        message: `Error: ${response.statusText}`,
      };
      return Promise.reject(error);
    }
    return Promise.resolve(response.json());
  }

  async getUserPosition(ip) {
    const response = await fetch(`${this.url}&ipAddress=${ip}`);
    if (!response.ok) {
      const error = {
        message: `Error: ${response.statusText}`,
      };
      return Promise.reject(error);
    }
    return Promise.resolve(response.json());
  }

  convertResponse(response) {
    this.response = {
      panel: [
        {
          id: Math.random(),
          title: 'ip address',
          info: this.convertField(response.ip),
        },
        {
          id: Math.random(),
          title: 'location',
          info: this.convertField(
            response.location.city,
            response.location.region,
            response.location.country,
          ),
        },
        {
          id: Math.random(),
          title: 'timezone',
          info: this.convertField(response.location.timezone),
        },
        {
          id: Math.random(),
          title: 'isp',
          info: this.convertField(response.isp),
        },
      ],
      position: this.setPosition(response.location.lat, response.location.lng),
    };
    return this.response;
  }

  convertField(field, additionalField, countryField) {
    if (field && additionalField && countryField)
      return `${field}, ${additionalField}, ${countryField}`;

    if (!!field || !!additionalField || countryField)
      return field || additionalField || countryField;

    return this.emptyField;
  }

  setPosition(lat, lng) {
    if (!lat || !lng) return this.position;
    return [lat, lng];
  }
}

export default new Api(BASE_URL, DEFAULT_POSITION);
