/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { compose } from 'recompose';

const enhancer = compose();

type FormSearchByZipCodeProps = {
  isFetching: boolean,
  isFetched: boolean,
  value: string,
  pattern: string,
  data: Object,
  modal: Object,
};

const FormSearchByZipCode = enhancer(
  ({ handleSubmit, handleChange, ...props }: FormSearchByZipCodeProps) => (
    <>
      <form onSubmit={handleSubmit}>
        <h6>Consultar</h6>
        <div className="form-group row">
          <label
            htmlFor="colFormLabelSm"
            className="col-2 col-form-label col-form-label-sm"
          >
            CEP
          </label>
          <div className="col-6 col-md-4">
            <input
              id="CEP"
              type="text"
              className="form-control form-control-sm"
              value={props.value}
              pattern={props.pattern}
              onChange={handleChange}
              required
              placeholder={props.placeholder}
              minLength="8"
              maxLength="9"
            />
          </div>
          <div className="col-2">
            <input
              className="btn btn-primary btn-sm"
              type="submit"
              data-toggle="modal"
              data-target={`#${props.modal.id}`}
              value="Buscar"
            />
          </div>
          <div className="col-auto" />
        </div>
      </form>
    </>
  )
);

FormSearchByZipCode.defaultProps = {
  isFetching: false,
  isFetched: false,
  pattern: '[0-9]{5}-?[0-9]{3}',
  placeholder: '00000-000',
  modal: {
    title: 'teste',
    id: 'modalResult',
  },
  data: {},
};

export default FormSearchByZipCode;
