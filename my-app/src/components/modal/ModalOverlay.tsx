import { FC } from "react";
import "./Modal.css";

interface propTypes {
  children: any;
  shadowColor: string;
}

const ModalOverlay: FC<propTypes> = (props) => {
  return (
    <div className={`modal ${props.shadowColor}`}>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
