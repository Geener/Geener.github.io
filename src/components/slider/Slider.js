import "./Slider.scss"

const Slider = props => {

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