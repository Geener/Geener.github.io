
import "./Slider.scss"

// import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const Slider = props => {

    return (<div className="row-background">
        <div>
            <h2 className="row-title">{props.title}</h2>
        </div>
        <div className="row">
            {/* <BiLeftArrow className="arrows" /> */}
            {props.data}
            {/* <BiRightArrow className="arrows" /> */}
        </div>
    </div>)
}

export default Slider