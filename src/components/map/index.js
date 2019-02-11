import React from 'react';
import withBehavior from './withBehavior';
import Map from './withView';

const Enhanced = withBehavior(({ ...rest }) => <Map {...rest} />);

export default Enhanced;
