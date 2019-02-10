// @flow
import React from 'react';
import { compose } from 'recompose';
import FormSearchByZipCode from '../form';
import './home.css';

type HomeProps = {
  isFetching: boolean,
  isFetched: boolean,
  data: Object,
};

const enhancer = compose();

const Home = enhancer(({ ...props }: HomeProps) => {
  return (
    <main className="container-fluid">
      <hgroup className="header">
        <h1>Consulta de endereço</h1>
      </hgroup>
      <section className="section">
        <FormSearchByZipCode {...props} />
        <pre className="mt-5">
          <code className="code">
            {props.isFetched && JSON.stringify(props.data)}
          </code>
        </pre>
      </section>
    </main>
  );
});

Home.defaultProps = {
  isFetching: false,
  isFetched: false,
  data: {},
};

export default Home;
