import "./Poster.scss"

const Poster = props => {

    const linkHandler = () => {
        const link = props.link

        if (typeof link === "function") {
            link()
        } else {
            window.open(link);
        }
    }

    return (
        <div className="container" onClick={linkHandler}>
            <div className="img-container">
                <img src={props.picture} alt={props.name}/>
            </div>
            <span>{props.name}</span>
            {props.title && <span id="poster-title">{props.title}</span>}
        </div>
    )
}

export default Poster