import { projects } from "../../data/projectsData";
import PagePreview from "../pagePreview/PagePreview"

import "./Projects.scss"

const Projects = () => {

    const ProjectCards = projects.map((project) => {
        return (
            <PagePreview name={project.name} descriptions={project.descriptions} builtWith={project.builtWith} picture={project.picture} link={project.link} />
        );
    });

    return (
        <div>
            <div className="items" >
                {ProjectCards}
            </div>
        </div>
    )
}

export default Projects