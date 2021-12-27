import CvPic from "../images/cv.png"

import classes from "./CV.module.css"

const Cv = () => {
    return (<div className={classes.cv}>
        <h1>My CVv</h1>
        <img src={CvPic}></img>
    </div>)
}

export default Cv;
