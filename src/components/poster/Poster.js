import "./Poster.scss"

const Poster = props => {

    return (
        <div className="container">
            <img src={props.picture} alt={props.name}/>
            <span>{props.name}</span>
        </div>
    )
}

export default Poster