// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  if (!props.isOpen) return null;

  const handleClose = () => {
    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-content">
          {<><h2>Lalala</h2><p>Something</p></>}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
