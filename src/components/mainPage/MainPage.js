import KnowledgeTree from "../knowledgeTree/KnowledgeTree"
import Projects from "../projects/Projects";
import Grades from "../grades/Grades"
import Profile from "../profile/Profile"
import Cv from "../cv/CV";

const MainPage = (props) => {

    return (
        <>
            {props.curState === "My Profile" && <Profile stateHandler={props.stateHandler}/>}
            {props.curState === "Knowledge Tree" && <KnowledgeTree />}
            {props.curState === "CV" && <Cv />}
            {props.curState === "My Projects" && <Projects />}
        </>
    );
};

export default MainPage;