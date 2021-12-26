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
        name: "Python",
        icon: < DiPython / > ,
        description: "Learnt from Udemy course",
    },
    {
        name: "Java",
        icon: < DiJava / > ,
        description: "Learnt at McGill",
    },
    {
        name: "C",
        icon: null ,
        description: "Learnt at McGill",
    },
    {
        name: "JavaScript",
        icon: < DiJavascript1 / > ,
        description: "Learnt at McGill",
    },
    {
        name: "HTML / CSS",
        icon: < AiFillHtml5 / > ,
        description: "Learnt at McGill",
    },
    {
        name: "React",
        icon: < DiReact / > ,
        description: "Learnt at McGill",
    },
    {
        name: "Linux / Bash",
        icon: < DiLinux / > ,
        description: "Learnt at McGill",
    },
    {
        name: "Node.js",
        icon: < FaNodeJs / > ,
        description: "Learnt at McGill",
    },
]

export {
    knowledgeTree
};