import Poster from "../poster/Poster";
import "./Slider.css";
import { FC } from "react";

interface propTypes {
  header: string;
  data: any;
  setIsInfoOpen: ((option: boolean) => any) | null;
}

const Slider: FC<propTypes> = (props) => {
  const posters = props.data.map((data: any) => (
    <Poster
      title={data.title}
      subtitle={data.dates}
      key={data.name}
      link={data.link}
      picture={data.img_path}
      setIsInfoOpen={props.setIsInfoOpen}
    />
  ));

  return (
    <div className="row-background">
      <div>
        <h2 className="row-title">{props.header}</h2>
      </div>
      <div className="row">{posters}</div>
    </div>
  );
};

export default Slider;
