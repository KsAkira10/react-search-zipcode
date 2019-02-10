import React from 'react';
import { compose } from 'recompose';
import './form.css';

const enhancer = compose();

type FormSearchByZipCodeProps = {
  isFetching: boolean,
  isFetched: boolean,
  value: string,
  pattern: string,
  data: Object,
};

const FormSearchByZipCode = enhancer(
  ({ handleSubmit, handleChange, ...props }: FormSearchByZipCodeProps) => (
    <form onSubmit={handleSubmit}>
      <h6>Consultar</h6>
      <label htmlFor="CEP">
        <span className="label">CEP</span>
        <input
          id="CEP"
          type="text"
          value={props.value}
          pattern={props.pattern}
          onChange={handleChange}
          required
          placeholder={props.placeholder}
        />
      </label>
      <button className="btn btn-primary btn-sm btn-buscar" type="submit">
        Buscar
      </button>
    </form>
  )
);

FormSearchByZipCode.defaultProps = {
  isFetching: false,
  isFetched: false,
  pattern: '[0-9]{5}-?[0-9]{3}',
  placeholder: '00000-000',
  data: {},
};

export default FormSearchByZipCode;
