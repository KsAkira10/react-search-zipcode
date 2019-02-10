import 'bootstrap/dist/css/bootstrap.css';
import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import Routes from './components/routes';
import rootSaga from './sagas/rootSaga';
import { register } from './serviceWorker';
import configureStore from './store/configureStore';

dotenv.config();

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

const Application = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
register({
  onSuccess: registration => {
    // eslint-disable-next-line no-console
    console.log(registration);
  },
  onUpdate: registration => {
    // eslint-disable-next-line no-console
    console.log(registration);
  },
});
