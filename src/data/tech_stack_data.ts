import htmlPic from "../images/skills/html.png";
import cssPic from "../images/skills/css.png";
import pythonPic from "../images/skills/python.png";
import javaPic from "../images/skills/java.png";
import linuxPic from "../images/skills/linux.png";
import nodePic from "../images/skills/node.png";
import mongodbPic from "../images/skills/mongodb.png";
import jsPic from "../images/skills/js.png";
import flutterPic from "../images/skills/flutter.png";
import langchainPic from "../images/skills/langchain.png";
import reactPic from "../images/skills/react.png";
import ocamlPic from "../images/skills/OCaml.png";
import sqlPic from "../images/skills/sql.png";
import cPic from "../images/skills/c.png";
import numpyPic from "../images/skills/numpy.png";
import pandasPic from "../images/skills/pandas.png";
import matplotlibPic from "../images/skills/matplotlib.png";
import seabornPic from "../images/skills/seaborn.png";
import tensorflowPic from "../images/skills/tensorflow.png";
import kerasPic from "../images/skills/keras.png";
import typescriptPic from "../images/skills/typescript.png";
import flaskPic from "../images/skills/flask.png";

export class TechItem {
  title: string;
  dates: string;
  img_path: any;
  link: string;

  constructor(
    title: string,
    img_path: string,
    link: string = "nothing",
    dates: string = ""
  ) {
    this.title = title;
    this.dates = dates;
    this.img_path = img_path;
    this.link = link;
  }
}

const python = new TechItem("Python", pythonPic, "https://www.python.org/");
const java = new TechItem("Java", javaPic, "https://dev.java/");
const flutter = new TechItem("Flutter", flutterPic, "https://flutter.dev/");
const langchain = new TechItem(
  "LangChain",
  langchainPic,
  "https://python.langchain.com/docs/get_started/introduction.html"
);
const js = new TechItem("JavaScript", jsPic, "https://www.javascript.com/");
const mongodb = new TechItem("MongoDb", mongodbPic, "https://www.mongodb.com/");
const node = new TechItem("Node JS", nodePic, "https://nodejs.org/en");
const html = new TechItem(
  "HTML",
  htmlPic,
  "https://en.wikipedia.org/wiki/HTML"
);
const css = new TechItem("CSS", cssPic, "https://en.wikipedia.org/wiki/CSS");
const linux = new TechItem(
  "Linux",
  linuxPic,
  "https://en.wikipedia.org/wiki/Linux"
);
const react = new TechItem("React", reactPic, "https://react.dev/");
const ocaml = new TechItem("OCaml", ocamlPic, "https://ocaml.org/");
const sql = new TechItem("SQL", sqlPic, "https://en.wikipedia.org/wiki/SQL");
const c = new TechItem(
  "C",
  cPic,
  "https://en.wikipedia.org/wiki/C_(programming_language)"
);
const numpy = new TechItem("NumPy", numpyPic, "https://numpy.org/about/");
const pandas = new TechItem("Pandas", pandasPic, "https://pandas.pydata.org/");
const matplotlib = new TechItem(
  "Matplotlib",
  matplotlibPic,
  "https://matplotlib.org/"
);
const seaborn = new TechItem(
  "Seaborn",
  seabornPic,
  "https://seaborn.pydata.org/"
);
const tensorFlow = new TechItem(
  "TensorFlow",
  tensorflowPic,
  "https://www.tensorflow.org/"
);
const keras = new TechItem("Keras", kerasPic, "https://keras.io/");
const typescript = new TechItem(
  "TypeScript",
  typescriptPic,
  "https://www.typescriptlang.org/"
);

const flask = new TechItem(
  "Flask",
  flaskPic,
  "https://flask.palletsprojects.com/en/2.3.x/"
);

export const tech_stack: TechItem[] = [
  python,
  java,
  react,
  flutter,
  langchain,
  node,
  pandas,
  typescript,
  js,
  numpy,
  matplotlib,
  seaborn,
  sql,
  ocaml,
  flask,
  tensorFlow,
  c,
  mongodb,
  linux,
  keras,
  html,
  css,
];

export const EY_stack: TechItem[] = [python, react, flutter, langchain];

export const HSBC_stack: TechItem[] = [
  python,
  pandas,
  matplotlib,
  seaborn,
  tensorFlow,
  keras,
  numpy,
];
