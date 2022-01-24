import "./Header.scss"

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { GiCheckboxTree } from 'react-icons/gi';
import { IoIosPaper } from 'react-icons/io';


const Header = (props) => {

    const cvIcon = document.getElementById("cv");
    const projectsIcon = document.getElementById("projects");
    const knowledgeTreeIcon = document.getElementById("knowledgeTree");
    const myName = document.getElementById("myName");

    const updateIconColor = (iconName) => {
        console.log(myName)

        

        if (knowledgeTreeIcon.classList.contains("selected_color")) {
            knowledgeTreeIcon.classList.remove("selected_color");
        }

        if (projectsIcon.classList.contains("selected_color")) {
            projectsIcon.classList.remove("selected_color");
        }

        if (cvIcon.classList.contains("selected_color")) {
            cvIcon.classList.remove("selected_color");
        }

        if (myName.classList.contains("selected_color")) {
            myName.classList.remove("selected_color");
        }

        console.log(iconName)
        iconName.classList.add("selected_color");
    }

    const clickHandlerProjects = () => {
        updateIconColor(projectsIcon)
        props.stateHandler("projects")

    }

    const clickHandlerCv = () => {
        updateIconColor(cvIcon)
        props.stateHandler("cv")

    }

    const clickHandlerKnowledgeTree = () => {
        updateIconColor(knowledgeTreeIcon)
        props.stateHandler("knowledgeTree")

    }

    const clickHandlerHomepage = () => {
        updateIconColor(myName)
        props.stateHandler("profile")
    }

    return (
        <div className="header">
            <div>
                <a id="projects" onClick={clickHandlerProjects}><DiCode /></a>
                <a id="knowledgeTree" onClick={clickHandlerKnowledgeTree}><GiCheckboxTree /></a>
                <a id="cv" onClick={clickHandlerCv}><IoIosPaper /></a>
            </div>
            <a id="myName" className="selected-color" onClick={clickHandlerHomepage}>Adam Geenen</a>
            <div>
                <a href="https://github.com/Geener" target="_blank"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/adamgeenen/" target="_blank"><AiFillLinkedin /></a>
            </div>
        </div>
    );
}



export default Header;