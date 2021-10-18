/**
 * Modal Component
 */
import { FC } from "react";
import { createPortal } from "react-dom";

// Dom Node form /public/index.html
const domNode = document.querySelector("#weather-modal-root");

export const Modal: FC<{
  showModal: boolean;
  closeModal: () => void;
}> = ({ children, showModal }) => {
  return domNode && showModal
    ? createPortal(
        <div>
          <div>{children}</div>
        </div>,
        domNode
      )
    : null;
};
