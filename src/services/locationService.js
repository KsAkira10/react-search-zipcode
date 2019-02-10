import request from '../config/axios';

const LOCATION_URL = (zipCode: string, cb: () => {}): string =>
  `ws/${zipCode}/json/?callback=${cb}`;

const fecthByZipCode = (zipCode: string, cb: () => {}): string =>
  request.get(LOCATION_URL(zipCode, cb));

export default fecthByZipCode;
