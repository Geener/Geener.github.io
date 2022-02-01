import { RiMapPinLine } from "react-icons/ri"
import { projects, extraCurriculars } from "../../data/sliderData"
import Poster from "../poster/Poster"
import Slider from "../slider/Slider";
import profilePic from "../../images/profilePic.jpg"

import "./Profile.scss"

const UserProfile = props => {

    const user = {
        name: "Adam Geenen",
        email: "adamgeenen@gmail.com",
        location: "Montreal, Canada",
        bio: "Motivated student who has a passion for technology. \n Enjoys learning the innerworkings of systems and developing end-to-end software. Experience front and back-end development. \n Curious to learn and explore more in Web and App Development.\nActively looking for internships in Software Engineering and Artificial Intelligence departments.",
        school: "Software Engineering @ McGill University",
        profilePic: profilePic,
        coverPic: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    };

    const CVclickHandler = () => {
        props.stateHandler("CV")
    }

    const projectPosters = projects.map(project => {
        console.log(project.name)
        return (<Poster key={project.name} name={project.name} link={project.link} picture={project.picture} />)
    })

    const extraCurricularsPosters = extraCurriculars.map(extraCurricular => {
        console.log(extraCurricular.name)
        return (<Poster name={extraCurricular.name} link={extraCurricular.link} picture={extraCurricular.picture} title={extraCurricular.title} scrollBar="true" />)
    })


    return (
        <div className="body">
            <div className="coverPic">
                <img src={user.coverPic} alt="cover_pic"></img>
            </div>
            <div className="mainSection">
                <div className="profilePic">
                    <img src={user.profilePic} alt="profile_pic"></img>
                </div>
                <div className="text">
                    <div className="align">
                        <div>
                            <h1>{user.name}</h1>
                            <h4>{user.school}</h4>
                            <h5><RiMapPinLine /> {user.location}</h5>
                        </div>
                    </div>
                    <p className="new_line" >{user.bio}</p>
                </div>
                <div className="buttons">
                    <a className="button" href="mailto:adamgeenen@gmail.com">Contact</a>
                    <div className="button" onClick={CVclickHandler}>CV</div>
                </div>
            </div>
            <Slider data={projectPosters} title="Projects" />
            <Slider data={extraCurricularsPosters} title="Extracurriculars" />
        </div>
    )
}

export default UserProfile;