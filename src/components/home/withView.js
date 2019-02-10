// @flow
import React from 'react';
import { compose } from 'recompose';
import FormSearchByZipCode from '../form';
import './home.css';

type HomeProps = {
  isFetching: boolean,
  isFetched: boolean,
};

const enhancer = compose();

const Home = enhancer(({ ...props }: HomeProps) => (
  <main className="container-fluid">
    <hgroup className="header">
      <h1>Consulta de endereço</h1>
    </hgroup>
    <section className="section">
      <FormSearchByZipCode {...props} />
    </section>
  </main>
));

Home.defaultProps = {
  isFetching: false,
  isFetched: false,
};

export default Home;
