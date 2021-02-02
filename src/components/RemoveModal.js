import React, { useState } from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => {
  const handleCancel = () => {
    props.handleShowModal(false);
  };
  const handleYes = () => {
    props.handleShowModal(false);
    props.startRemoveExpense({ id: props.expense.id });
    props.history.push('/');
  };

  return (
    <Modal isOpen={props.showModal} ariaHideApp={false} className='modal'>
      <div>
        <p className="modal__title">Do you want to remove this expense?</p>
        <div className="modal__buttons">
          <button className='button button--secondary' onClick={handleCancel}>
            Cancel
          </button>
          <button className='button' onClick={handleYes}>
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveModal;
