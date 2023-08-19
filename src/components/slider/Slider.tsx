import Poster from "../poster/Poster";
import "./Slider.css";
import { FC } from "react";

interface propTypes {
  header: string;
  data: any;
}

const Slider: FC<propTypes> = (props) => {
  const posters = props.data.map((data: any) => (
    <Poster
      title={data.title}
      subtitle={data.dates}
      key={data.name}
      link={data.link}
      picture={data.img_path}
      description={data.description}
      company={data.company}
      tech_stack={data.tech_stack}
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
