import { knowledgeTree } from "../knowledgeTreeData"
import classes from "./KnowledgeTree.module.css"

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
        return (
            <div >
                <li>
                    <div className={classes.cv}>
                        <h2>{branch.icon} {branch.name}</h2>
                        <p>{branch.description}</p>
                    </div>
                </li>
            </div>)
    })

    return (
        <>
            <h1 className={classes.title}>My Coding History</h1>
            <div className={classes.timeline}>
                <ul>
                    {treeBranches}
                </ul>
            </div>
        </>
    )
}

export default KnowledgeTree;