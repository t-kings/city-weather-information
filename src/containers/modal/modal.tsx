/**
 * Modal Container
 */
import { FC } from "react";
import { createPortal } from "react-dom";
import Styles from "./styles.module.css";

// Dom Node form /public/index.html
const domNode = document.querySelector("#weather-modal-root");

export const Modal: FC<{
  showModal: boolean;
  closeModal: () => void;
  titleComponent?: JSX.Element;
}> = ({ children, showModal, closeModal, titleComponent }) => {
  const close = (e: any) => {
    e.preventDefault();
    const modal = document.querySelector("#modal");
    if (e.target === modal) {
      closeModal();
    }
  };
  return domNode && showModal
    ? createPortal(
        <div className={Styles.modal} id="modal" onClick={close}>
          <div>
            <button onClick={closeModal} className={Styles.close}>
              <p>&times;</p>
            </button>
            {titleComponent ? (
              <div className={Styles.title}>{titleComponent}</div>
            ) : null}
            <div className={Styles.children}>{children}</div>
          </div>
        </div>,
        domNode
      )
    : null;
};
