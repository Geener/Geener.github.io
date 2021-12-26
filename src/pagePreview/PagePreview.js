import classes from "./PagePreview.module.css"

const PagePreview = (props) => {
    let linky = props.link;

    const cardClickHandler = () => {
        window.open(linky);
    }

    return (
        <div className={classes.item} onClick={cardClickHandler}>

            <div className={classes.item_text}>
                <div className={classes.item_text_wrap}>
                    <h1 className={classes.item_text_title}>{props.name}</h1>
                    <div className={classes.item_image}>
                        <img src={props.picture} alt={props.name} />
                    </div>
                    <h4 className={classes.item_text_description}>{props.description}</h4>
                    <h5 className={classes.item_text_builtWith}>{props.builtWith}</h5>
                </div>
            </div>
        </div>
    );
}

export default PagePreview;