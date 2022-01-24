import { knowledgeTree } from "../../data/knowledgeTreeData"
import "./KnowledgeTree.scss"

const KnowledgeTree = (props) => {

    // const items = document.querySelectorAll('.timeline li');

    // const isInViewport = el => {
    //     const rect = el.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <=
    //         (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // };

    // const run = () =>
    //     items.forEach(item => {
    //         if (isInViewport(item)) {
    //             item.classList.add('show');
    //         }
    //     });

    // // Events
    // window.addEventListener('load', run);
    // window.addEventListener('resize', run);
    // window.addEventListener('scroll', run);



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
            <h1 className="title">My Coding History</h1>
            <div className="timeline">
                <ul>
                    {treeBranches}
                </ul>
            </div>
        </>
    )
}

export default KnowledgeTree;