import css from './Modal.module.css';

const Modal = function ({ srcModal, altModal }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={srcModal} alt={altModal} />
      </div>
    </div>
  );
};

export default Modal;
