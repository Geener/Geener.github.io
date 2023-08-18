import { FC } from "react";
import "./Poster.css";

interface propTypes {
  title: string;
  subtitle: string;
  link: string;
  picture: string;
  setIsInfoOpen: ((option: boolean) => any) | null;
}

const Poster: FC<propTypes> = (props) => {
  const linkHandler = () => {
    if (props.setIsInfoOpen === null) {
      window.open(props.link);
    } else {
      console.log("OPENING MODAL");
      props.setIsInfoOpen(true);
    }
  };

  return (
    <div className="container" onClick={linkHandler}>
      <div className="img-container">
        <img src={props.picture} alt={props.title} />
      </div>
      <span>{props.title}</span>
      {props.subtitle && <span id="poster-title">{props.subtitle}</span>}
    </div>
  );
};

export default Poster;
