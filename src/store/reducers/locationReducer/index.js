const initialState = {
  isFetching: false,
  isFetched: false,
  success: false,
  error: false,
  data: {},
};

export const ACTION_TYPES = {
  LOCATION_BY_ZIP_CODE_REQUEST: 'LOCATION_BY_ZIP_CODE_REQUEST',
  LOCATION_BY_ZIP_CODE_SUCCESS: 'LOCATION_BY_ZIP_CODE_SUCCESS',
  LOCATION_BY_ZIP_CODE_ERROR: 'LOCATION_BY_ZIP_CODE_ERROR',
};

export const fetchLocationByZipCode = payload => ({
  type: ACTION_TYPES.LOCATION_BY_ZIP_CODE_REQUEST,
  payload,
});

const location = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.OFFER_BY_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOCATION_BY_ZIP_CODE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOCATION_BY_ZIP_CODE_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        success: true,
        error: false,
        data,
      };
    }
    case ACTION_TYPES.LOCATION_BY_ZIP_CODE_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: true,
        data: payload,
      };
    default:
      return state;
  }
};

export default location;
