import { FC } from "react";
import "./Modal.css";

interface propTypes {
  setIsInfoOpen: (option: boolean) => any;
}

const Backdrop: FC<propTypes> = (props) => {
  const closeModel = () => {
    props.setIsInfoOpen(false);
  };

  return <div className="backdrop" onClick={closeModel}></div>;
};

export default Backdrop;
