import "./Navbar.css";
import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import CV from "../../data/cv.pdf";

const Header: FC = (props) => {
  return (
    <div className="header">
      <span id="myName" className="selected-color">
        Adam Geenen
      </span>
      <div>
        <a href="https://github.com/Geener" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/adamgeenen/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href={CV} target="_blank">
          <IoIosPaper />
        </a>
      </div>
    </div>
  );
};

export default Header;
