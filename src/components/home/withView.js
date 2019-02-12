// @flow
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, withState } from 'recompose';
import FormSearchByZipCode from '../form';
import Map from '../map';
import './home.css';

type HomeProps = {
  isFetching: boolean,
  isFetched: boolean,
  data: Object,
};

const enhancer = compose(
  connect(
    props => props,
    {}
  ),
  withProps(props => props),
  withState('show', 'setShow', true),
  withHandlers({
    handleClose: ({ setShow }) => () => {
      setShow(false);
    },
  })
);

const Home = enhancer(({ show, handleClose, ...props }: HomeProps) => (
  <main className="container">
    <hgroup className="header">
      <h1>Consulta de endereço</h1>
    </hgroup>
    <section className="section d-flex justify-content-center">
      <FormSearchByZipCode {...props} />
      {props.isFetched && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.data && props.data.logradouro}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!props.data.erro && (
              <>
                <div className="mt-1">
                  <div>{props.data && props.data.bairro}</div>
                  <div>
                    {props.data &&
                      `${props.data.localidade} - ${props.data.uf}`}
                  </div>
                  <div>{props.data && props.data.cep}</div>
                </div>
                <div className="mt-3">
                  <Map {...props} />
                </div>
              </>
            )}
            {props.data.erro && (
              <h4>
                Ops! Sua busca não foi encontrada{' '}
                <span role="img" aria-label="triste">
                  😰
                </span>
              </h4>
            )}
          </Modal.Body>
        </Modal>
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
