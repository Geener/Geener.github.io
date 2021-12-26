import CvPic from "../images/cv.png"

import classes from "./Cv.module.css"

const Cv = () => {
    return (<div className={classes.cv}>
        <h1>My CV</h1>
        <img src={CvPic}></img>
    </div>)
}

export default Cv;