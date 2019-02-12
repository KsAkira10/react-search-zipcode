// @flow
import { compose, setDisplayName, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import { reset } from '../../store/reducers/locationReducer';

const withBehavior = compose(
  setDisplayName('withBehavior'),
  connect(
    ({ data, isFetched, isFetching }) => ({
      data,
      isFetched,
      isFetching,
    }),
    {
      resetAction: reset,
    }
  ),
  withState('show', 'setShow', true),
  withProps(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
  }))
);

export default withBehavior;
