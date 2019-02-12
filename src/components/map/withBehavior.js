// @flow
import {
  compose,
  setDisplayName,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import hereMaps from '../../config/hereMaps';

const { appCode, appId } = hereMaps;

const withBehavior = compose(
  setDisplayName('withBehavior'),
  connect(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
    appCode,
    appId,
  })),
  withState(
    'url',
    'setUrl',
    'https://image.maps.api.here.com/mia/1.6/mapview?&h=300&w=auto&z=16&t=5&poitxs=16&poitxc=black&poifc=yellow'
  ),
  withState('points', 'setPoints', []),
  withProps(({ data, isFetched, isFetching }) => {
    return {
      data,
      isFetched,
      isFetching,
      appCode,
      appId,
    };
  }),
  withHandlers({
    getMapSrc: ({ url, points, data }) => () => {
      const getPOIList = () => {
        if (points.length > 0) {
          let param = '&poi=';
          points.forEach(poi => {
            param += `${poi.latitude},${poi.longitude}`;
          });
          return param;
        }

        return '';
      };
      return `${url}&app_id=${appId}&app_code=${appCode}&co=Brasil&ci=${
        data.localidade
      }&zi=${data.cep}${getPOIList()}`;
    },
  })
);

export default withBehavior;
