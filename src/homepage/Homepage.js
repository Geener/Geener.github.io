import human from "../images/human.png"

import classes from "./Homepage.module.css"

const Homepage = (props) => {
    return (<div className={classes.homepage}>

        <h1>McGill Software Engineering Student</h1>
        <img src={human}></img>
        <h3>Actively looking for Summer 2022 internships</h3>
        <p>Passion for web development</p>
    </div>)
}

export default Homepage