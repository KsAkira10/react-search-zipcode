import * as nativeAxios from 'axios';

const BASE_URL = '/api/';
const ERROR_TIMEOUT =
  'Infelizmente estamos com problemas de conexão, tente novamente mais tarde.';

const createAxios = () => {
  const axiosInstance = nativeAxios.create({
    baseURL: BASE_URL,
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        throw new Error(ERROR_TIMEOUT);
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxios();
