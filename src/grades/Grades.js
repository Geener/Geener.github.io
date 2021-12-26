import { GradesPic } from "../projectsData";
import classes from "./Grades.module.css"

const Grades = () => {

    return (
        <div className={classes.grades}>
            <img src={GradesPic} alt="My Grades" />
        </div>
    )
}

export default Grades;