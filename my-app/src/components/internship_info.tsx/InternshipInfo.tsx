import Modal from "../modal/Modal";
import { TechItem } from "../../data/tech_stack_data";
import { FC } from "react";

interface propTypes {
  setIsInfoOpen: (option: boolean) => any;
  position: string;
  dates: string;
  description: string[];
  company: string;
  tech_stack: TechItem[];
}

const InternshipInfo: FC<propTypes> = (props) => {
  let additionalClass = "";

  if (props.company === "Ernst & Young") {
    additionalClass = "ey";
  } else if (props.company === "HSBC") {
    additionalClass = "hsbc";
  }

  const displayDescription = props.description.map((description: string) => (
    <div className="intern-desc" key={description[0]}>
      <p>• {description}</p>
      <br />
    </div>
  ));

  return (
    <Modal setIsInfoOpen={props.setIsInfoOpen} shadowColor={additionalClass}>
      <div className="modal-intern">
        <div className="modal-intern-titles">
          <h1>{props.company}</h1>
          <h3>{props.position}</h3>
        </div>
        {displayDescription}
      </div>
    </Modal>
  );
};

export default InternshipInfo;
