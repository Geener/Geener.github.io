import KnowledgeTree from "../knowledgeTree/KnowledgeTree"
import Projects from "../projects/Projects";
import Grades from "../grades/Grades";
import Homepage from "../homepage/Homepage";
import Cv from "../cv/CV";

const MainPage = (props) => {

    return (
        <>
            {props.state === "homepage" && <Homepage />}
            {props.state === "knowledgeTree" && <KnowledgeTree />}
            {props.state === "cv" && <Cv />}
            {props.state === "projects" && <Projects />}
            {props.state === "grades" && <Grades />}
        </>
    );
};

export default MainPage;