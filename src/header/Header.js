import classes from "./Header.module.css"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { GiCheckboxTree } from 'react-icons/gi';
import { IoIosPaper } from 'react-icons/io';


const Header = (props) => {

    const updateIconColor = (iconName) => {
        document.getElementById("projects").style.color = "azure"
        document.getElementById("knowledgeTree").style.color = "azure"
        document.getElementById("homepage").style.color = "azure"
        document.getElementById("cv").style.color = "azure"

        document.getElementById(iconName).style.color = "rgb(0, 157, 255)"
    }

    const clickHandlerProjects = () => {
        props.stateHandler("projects")
        updateIconColor("projects")
    }

    const clickHandlerCv = () => {
        props.stateHandler("cv")
        updateIconColor("cv")
    }

    const clickHandlerKnowledgeTree = () => {
        console.log("hi")
        props.stateHandler("knowledgeTree")
        updateIconColor("knowledgeTree")
    }

    const clickHandlerHomepage = () => {
        props.stateHandler("homepage")
        updateIconColor("homepage")
    }

    return (
        <div className={classes.header}>
            <div>
                <a id="projects" onClick={clickHandlerProjects}><DiCode /></a>
                <a id="knowledgeTree" onClick={clickHandlerKnowledgeTree}><GiCheckboxTree /></a>
                <a id="cv" onClick={clickHandlerCv}><IoIosPaper /></a>
            </div>
            <span id="homepage" onClick={clickHandlerHomepage}>Adam Geenen</span>
            <div>
                <a href="https://github.com/Geener"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/adamgeenen/"><AiFillLinkedin /></a>
            </div>
        </div>
    );
}



export default Header;