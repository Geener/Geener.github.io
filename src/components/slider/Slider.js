import { projects } from "../../data/sliderData"
import Poster from "../poster/Poster"

import "./Slider.scss"

import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const Slider = () => {

    const posters = projects.map(project => {
        console.log(project.name)
        return (<Poster name={project.name} link={project.link} picture={project.picture} />)
    })

    // const posters = projects.map(project => {
    //     console.log(project.name)
    //     return (<Poster name={project.name} link={project.link} picture={project.picture} />)
    // })

    return (<div className="row-background">
        <div>
            <h2 className="row-title">Projects</h2>
        </div>
        <div className="row">
            <BiLeftArrow className="arrows" />
            {posters}
            <BiRightArrow className="arrows" />
        </div>
    </div>)
}

export default Slider