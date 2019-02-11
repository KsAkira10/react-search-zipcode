// @flow
import React from 'react';
import { compose } from 'recompose';
import Modal from 'react-bootstrap/Modal';
import FormSearchByZipCode from '../form';
import Map from '../map';
import './home.css';

type HomeProps = {
  isFetching: boolean,
  isFetched: boolean,
  data: Object,
};

const enhancer = compose();

const Home = enhancer(({ handleClose, show, ...props }: HomeProps) => (
  <main className="container-fluid">
    <hgroup className="header">
      <h1>Consulta de endereço</h1>
    </hgroup>
    <section className="section">
      <FormSearchByZipCode {...props} />
      {props.isFetched && show && (
        <Modal.Dialog>
          <Modal.Title>
            <div>{props.data && props.data.logradouro}</div>
          </Modal.Title>
          <Modal.Body>
            <div>
              <div>{props.data && props.data.bairro}</div>
              <div>
                {props.data && `${props.data.localidade} - ${props.data.uf}`}
              </div>
              <div>{props.data && props.data.cep}</div>
            </div>
            <div className="mt-5">
              <Map {...props} />
            </div>
          </Modal.Body>
        </Modal.Dialog>
      )}
    </section>
  </main>
));

Home.defaultProps = {
  isFetching: false,
  isFetched: false,
  data: {},
};

export default Home;
