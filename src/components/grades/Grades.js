import { GradesPic } from "../../data/projectsData";
import "./Grades.scss"

const Grades = () => {

    return (
        <div className="grades">
            <img src={GradesPic} alt="My Grades" />
        </div>
    )
}

export default Grades;