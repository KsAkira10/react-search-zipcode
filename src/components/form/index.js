import React from 'react';
import withBehavior from './withBehavior';
import FormSearchByZipCode from './withView';

const Enhanced = withBehavior(({ ...rest }) => (
  <FormSearchByZipCode {...rest} />
));

export default Enhanced;
