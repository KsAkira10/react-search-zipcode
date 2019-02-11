// @flow
import {
  compose,
  setDisplayName,
  withProps,
  withState,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';

const withBehavior = compose(
  setDisplayName('withBehavior'),
  connect(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
  })),
  withState('show', 'setShow', true),
  withProps(({ data, isFetched, isFetching }) => ({
    data,
    isFetched,
    isFetching,
  })),
  withHandlers({
    handleClose: ({ setShow, show }) => () => {
      setShow(!show);
    },
  })
);

export default withBehavior;
