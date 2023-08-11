import "./Slider.scss"
import {FC} from "react"

interface propTypes {
    title: string;
    data: any;
}

const Slider: FC<propTypes> = (props) => {

    return (
    <div className="row-background">
        <div>
            <h2 className="row-title">{props.title}</h2>
        </div>
        <div className="row">
            {props.data}
        </div>
    </div>)
}

export default Slider