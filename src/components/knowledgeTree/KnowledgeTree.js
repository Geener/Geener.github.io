import { knowledgeTree } from "../../data/knowledgeTreeData"
import "./KnowledgeTree.scss"

const KnowledgeTree = (props) => {

    const treeBranches = knowledgeTree.map((branch) => {

        const displayDescription = branch.descriptions.map((description) => {
            return (<p className="description">{description}</p>)
        })

        return (
            <div >
                <li>
                    <div className="cv">
                        <h2>{branch.icon} {branch.name}</h2>
                        {displayDescription}
                    </div>
                </li>
            </div>)
    })

    return (
        <>
            <div className="timeline">
                <ul>
                    {treeBranches}
                </ul>
            </div>
        </>
    )
}

export default KnowledgeTree;