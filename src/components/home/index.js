import React from 'react';
import withBehavior from './withBehavior';
import Home from './withView';

const Enhanced = withBehavior(({ ...rest }) => <Home {...rest} />);

export default Enhanced;
