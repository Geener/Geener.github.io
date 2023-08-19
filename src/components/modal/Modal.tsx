import { createPortal } from "react-dom";
import { FC } from "react";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import "./Modal.css";

interface propTypes {
  children: any;
  setIsInfoOpen: any;
  shadowColor: string;
}

const Modal: FC<propTypes> = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {createPortal(
        <Backdrop setIsInfoOpen={props.setIsInfoOpen} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay shadowColor={props.shadowColor}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
