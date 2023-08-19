import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import CV from "../../data/cv.pdf";
import "./Profile.css";

const PROFILE_DESCRIPTION: string[] = [
  "📍  Montreal, Canada",
  "✈️ Canadian and Dutch Citizenship",
  "👨‍🎓 4th year Software Engineering @ McGill University (3.82 GPA)",
];

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <span>Adam Geenen</span>
        <div>
          <a href="https://github.com/Geener" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adamgeenen/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a href={CV} target="_blank" rel="noreferrer">
            <IoIosPaper />
          </a>
        </div>
      </div>
      <div className="profile-description">
        {PROFILE_DESCRIPTION.map((description) => (
          <p key={description[5]}>{description}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
