import InternshipInfo from "../internship_info.tsx/InternshipInfo";
import { TechItem } from "../../data/tech_stack_data";
import { FC, useState } from "react";
import "./Poster.css";

interface propTypes {
  company: string;
  title: string;
  subtitle: string;
  link: string;
  picture: string;
  description: string[];
  tech_stack: TechItem[];
}

const Poster: FC<propTypes> = (props) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const linkHandler = () => {
    // if dont want anything to happen
    if (props.link === "nothing") {
      // if theres a link
    } else if (props.link !== "") {
      window.open(props.link);

      // if want model to open
    } else {
      console.log("OPENING MODAL");
      setIsInfoOpen(true);
    }
  };

  return (
    <>
      <div className="container" onClick={linkHandler}>
        <div className="img-container">
          <img src={props.picture} alt={props.title} />
        </div>
        <span>{props.title}</span>
        {props.subtitle && <span id="poster-title">{props.subtitle}</span>}
      </div>

      {isInfoOpen && (
        <InternshipInfo
          setIsInfoOpen={setIsInfoOpen}
          position={props.title}
          dates={props.subtitle}
          description={props.description}
          company={props.company}
          tech_stack={props.tech_stack}
        />
      )}
    </>
  );
};

export default Poster;
