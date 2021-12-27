import { projects } from "../projectsData";
import PagePreview from "../pagePreview/PagePreview"

import classes from "./Projects.module.css"

const Projects = () => {

    const ProjectCards = projects.map((project) => {
        return (
            <PagePreview name={project.name} descriptions={project.descriptions} builtWith={project.builtWith} picture={project.picture} link={project.link} />
        );
    });

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>My Projects</h1>
            <div className={classes.items}>
                {ProjectCards}
            </div>
        </div>
    )
}

export default Projects