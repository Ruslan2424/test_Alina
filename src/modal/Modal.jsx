/* eslint-disable no-console */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import './modal.css';

export const Modal = ({ addmodal, modal }) => {
  // eslint-disable-next-line no-unused-vars
  const [answer] = useState(true);

  return (
    <div hidden={modal}>
      <div className="modal">
        <div className="modal__content">
          Are you sure?
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              addmodal(answer);
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              addmodal(!answer);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  addmodal: propTypes.func.isRequired,
  modal: propTypes.bool.isRequired,
};
