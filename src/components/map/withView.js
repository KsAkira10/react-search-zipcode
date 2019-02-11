// @flow
import React from 'react';
import { compose } from 'recompose';

type MapProps = {
  isFetching: boolean,
  isFetched: boolean,
  appCode: string,
  appId: string,
  getMapSrc: Function,
};

const enhancer = compose();

const Map = enhancer(({ getMapSrc, isFetched }: MapProps) => {
  return (
    isFetched && (
      <>
        <img
          className="img-fluid img-thumbnail rounded"
          src={getMapSrc()}
          alt="here Maps"
        />
      </>
    )
  );
});

Map.defaultProps = {
  isFetching: false,
  isFetched: false,
  appCode: '',
  appId: '',
};

export default Map;
