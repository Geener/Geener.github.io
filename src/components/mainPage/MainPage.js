import KnowledgeTree from "../knowledgeTree/KnowledgeTree"
import Projects from "../projects/Projects";
import Grades from "../grades/Grades"
import Profile from "../profile/Profile"
import Cv from "../cv/CV";

const MainPage = (props) => {

    return (
        <>
            {props.state === "profile" && <Profile />}
            {props.state === "knowledgeTree" && <KnowledgeTree />}
            {props.state === "cv" && <Cv />}
            {props.state === "projects" && <Projects />}
            {props.state === "grades" && <Grades />}
        </>
    );
};

export default MainPage;