import classes from "./PagePreview.module.css"

const PagePreview = (props) => {
    let linky = props.link;

    const cardClickHandler = () => {
        window.open(linky);
    }

    const displayDescription = props.descriptions.map((description) => {
        return (<p className={classes.item_text_description}>{description}</p>)
    })

    const displayBuiltWith = props.builtWith.map((language) => {
        return (<p className={classes.item_text_builtWith}>{language}</p>)
    })

    return (
        <div className={classes.item} onClick={cardClickHandler}>

            <div className={classes.item_text}>
                <div className={classes.item_text_wrap}>
                    <h1 className={classes.item_text_title}>{props.name}</h1>
                    <div className={classes.item_image}>
                        <img src={props.picture} alt={props.name} />
                    </div>
                    <div className={classes.project_info}>
                        <div className={classes.description}>
                            <h4>Description</h4>
                            {displayDescription}
                        </div>
                        <div className={classes.builtWith}>
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