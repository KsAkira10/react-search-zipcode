// @flow
import { compose, setDisplayName, withProps } from 'recompose';
import { connect } from 'react-redux';

const withBehavior = compose(
  setDisplayName('withBehavior'),
  connect(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
  })),
  withProps(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
  }))
);

export default withBehavior;
