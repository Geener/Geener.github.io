import { FC } from "react";
import "./Modal.css";

interface propTypes {
  children: any;
}

const ModalOverlay: FC<propTypes> = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
