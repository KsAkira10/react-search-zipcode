import createBrowserHistory from 'history/createBrowserHistory';

const props = {
  basename: process.env.PUBLIC_URL,
};

if (process.env.NODE_ENV === 'test') {
  props.basename = '/';
}

export default createBrowserHistory(props);
