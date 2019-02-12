import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Home from '.';
import rootSaga from '../../sagas/rootSaga';
import configureStore from '../../store/configureStore';

dotenv.config();

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore(sagaMiddleware);
  sagaMiddleware.run(rootSaga);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div
  );
});
