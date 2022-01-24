import CvPic from "../../images/cv.png"

import "./CV.scss"

const Cv = () => {
    return (<div className="cv">
        <h1>My CV</h1>
        <img src={CvPic}></img>
    </div>)
}

export default Cv;
