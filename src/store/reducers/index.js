import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import location from './locationReducer';

export default combineReducers({
  location,
  form: formReducer,
});
