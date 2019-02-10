// @flow
import React from 'react';
import { compose } from 'recompose';
import Modal from 'react-bootstrap/Modal';
import FormSearchByZipCode from '../form';
import './home.css';

type HomeProps = {
  isFetching: boolean,
  isFetched: boolean,
  data: Object,
};

const enhancer = compose();

const Home = enhancer(({ handleClose, show, ...props }: HomeProps) => {
  return (
    <main className="container-fluid">
      <hgroup className="header">
        <h1>Consulta de endereço</h1>
      </hgroup>
      <section className="section">
        <FormSearchByZipCode {...props} />
        {props.isFetched && (
          <Modal.Dialog show={show}>
            <Modal.Body>
              <Modal.Title className="d-flex justify-content-between">
                {props.data && props.data.logradouro}
                <button
                  type="button"
                  className="close-button"
                  onClick={handleClose}
                >
                  X
                </button>
              </Modal.Title>
              <div>
                <div>{props.data && props.data.bairro}</div>
                <div>
                  {props.data && `${props.data.localidade} - ${props.data.uf}`}
                </div>
                <div>{props.data && props.data.cep}</div>
              </div>
              <div>
                <h1>RENDER MAPS HERE!</h1>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        )}
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
