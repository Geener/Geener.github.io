import "./Header.scss"

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';
import { GiCheckboxTree } from 'react-icons/gi';
import { IoIosPaper } from 'react-icons/io';
import { CgProfile } from "react-icons/cg"


const Header = (props) => {

    const curState = props.curState

    const clickHandlerProjects = () => {
        props.stateHandler("My Projects")
    }

    const clickHandlerCv = () => {
        props.stateHandler("CV")
    }

    const clickHandlerKnowledgeTree = () => {
        props.stateHandler("Knowledge Tree")
    }

    const clickHandlerHomepage = () => {
        props.stateHandler("My Profile")
    }



    return (
        <div className="header">
            <div>
                <a className={curState === "My Profile" ? "selected_color" : ""} onClick={clickHandlerHomepage}><CgProfile /></a>
                <a className={curState === "My Projects" ? "selected_color" : ""} onClick={clickHandlerProjects}><DiCode /></a>
                <a className={curState === "Knowledge Tree" ? "selected_color" : ""} onClick={clickHandlerKnowledgeTree}><GiCheckboxTree /></a>
                <a className={curState === "CV" ? "selected_color" : ""} onClick={clickHandlerCv}><IoIosPaper /></a>
            </div>
            <span id="myName" className="selected-color">{props.curState}</span>
            <div>
                <a href="https://github.com/Geener" target="_blank"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/adamgeenen/" target="_blank"><AiFillLinkedin /></a>
            </div>
        </div>
    );
}



export default Header;