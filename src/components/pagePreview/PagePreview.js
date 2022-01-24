import "./PagePreview.scss"

const PagePreview = (props) => {
    let linky = props.link;

    const cardClickHandler = () => {

        if (typeof linky === "function") {
            linky()
        } else {
            window.open(linky);
        }
    }

    const displayDescription = props.descriptions.map((description) => {
        return (<p className="item_text_description">{description}</p>)
    })

    const displayBuiltWith = props.builtWith.map((language) => {
        return (<p className="item_text_builtWith">{language}</p>)
    })

    return (
        <div className="item" onClick={cardClickHandler}>

            <div className="item_text">
                <div className="item_text_wrap">
                    <h1 className="item_text_title">{props.name}</h1>
                    <div className="item_image">
                        <img src={props.picture} alt={props.name} />
                    </div>
                    <div className="project_info">
                        <div className="description">
                            <h4>Description</h4>
                            {displayDescription}
                        </div>
                        <div className="builtWith">
                            <h4>Built With</h4>
                            {displayBuiltWith}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagePreview;