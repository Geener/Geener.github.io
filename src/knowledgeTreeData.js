import {
    DiPython,
    DiJava,
    DiJavascript1,
    DiReact,
    DiLinux
} from 'react-icons/di';

import {
    AiFillHtml5
} from "react-icons/ai"

import {
    FaNodeJs,
} from "react-icons/fa"

const knowledgeTree = [{
        year: "2019",
        name: "Python",
        descriptions: ["•Raspberry Pi to code autonomous cube sorting robot", "•Blackjack", "•Tic-Tac-Toe"],
        icon: < DiPython / >,
    },
    {
        name: "Java",
        year: "2020",
        descriptions: ["•End-to-end web and android applications", "•Suduko Solver (up to 5X5)", "•Decision Tree", "•Advanced data structures (Graph algorithms)" ],
        icon: < DiJava / > ,
    },
    {
        name: "C",
        year: "2020",
        descriptions: ["•Statistics with COVID data", "•Basic data structures"],
        icon: null ,
    },
    {
        name: "JavaScript",
        year: "2020",
        descriptions: ["•Hangman game using words from an API", "•To-do List"],
        icon: < DiJavascript1 / > ,
    },
    {
        name: "HTML / CSS",
        year: "2020",
        descriptions: ["•Used with React and Node.js applications"],
        icon: < AiFillHtml5 / > ,
    },
    {
        year: "2021",
        name: "React",
        descriptions: ["•Replicated a food order terminal", "•Personal Website"],
        icon: < DiReact / > ,
    },
    {
        year: "2021",
        name: "Linux / Bash",
        descriptions: ["•Wrote system scripts", "•Manipulated large data sets"],
        icon: < DiLinux / > ,
    },
    {
        name: "Node.js",
        year: "2021",
        descriptions: ["•Built a fully functioning online shop"],
        icon: < FaNodeJs / > ,
    },
]

export {
    knowledgeTree
};