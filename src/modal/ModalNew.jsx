/* eslint-disable no-console */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import './modal.css';

export const ModalNew = ({ addmodalNew, modalNew }) => {
  // eslint-disable-next-line no-unused-vars
  const [answer] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('');

  return (
    <div hidden={modalNew}>
      <div className="modal">
        <div className="modal__content">
          <input
            value={name}
            placeholder="add new name product"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              addmodalNew(name, answer);
              setName('');
            }}
          >
            add
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              addmodalNew(!answer);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ModalNew.propTypes = {
  addmodalNew: propTypes.func.isRequired,
  modalNew: propTypes.bool.isRequired,
};
