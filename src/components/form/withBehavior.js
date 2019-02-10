// @flow
import {
  compose,
  setDisplayName,
  withProps,
  withHandlers,
  withState,
} from 'recompose';
import { connect } from 'react-redux';
import { fetchLocationByZipCode } from '../../store/reducers/locationReducer';

const withBehavior = compose(
  setDisplayName('withBehavior'),
  connect(
    props => props,
    {
      fetchLocationByZipCodeAction: fetchLocationByZipCode,
    }
  ),
  withProps(props => props),
  withState('value', 'setValue', ''),
  withHandlers({
    handleSubmit: ({ value, fetchLocationByZipCodeAction }) => event => {
      event.preventDefault();
      const zipCode = value.replace('-', '');
      fetchLocationByZipCodeAction({ zipCode });
    },
    handleChange: ({ setValue }) => event => {
      setValue(event.target.value);
    },
  })
);

export default withBehavior;
