import request from '../config/axios';

const LOCATION_URL = (zipCode: string): string => `ws/${zipCode}/json`;

const fecthByZipCode = ({ zipCode }: { zipCode: string }) =>
  request.get(LOCATION_URL(zipCode));

export default fecthByZipCode;
