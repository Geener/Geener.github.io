import Modal from "../modal/Modal";
import { FC } from "react";

interface propTypes {
  setIsInfoOpen: (option: boolean) => any;
}

const InternshipInfo: FC<propTypes> = (props) => {
  return <Modal setIsInfoOpen={props.setIsInfoOpen}>INFO</Modal>;
};

export default InternshipInfo;
