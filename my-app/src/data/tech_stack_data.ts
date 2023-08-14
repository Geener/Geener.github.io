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

class TechItem {
  title: string;
  dates: string;
  img_path: any;
  link: string;

  constructor(
    title: string,
    img_path: string,
    dates: string = "",
    link: string = ""
  ) {
    this.title = title;
    this.dates = dates;
    this.img_path = img_path;
    this.link = link;
  }
}

const python = new TechItem("Python", pythonPic);
const java = new TechItem("Java", javaPic);
const flutter = new TechItem("Flutter", flutterPic);
const langchain = new TechItem("LangChain", langchainPic);
const js = new TechItem("JavaScript", jsPic);
const mongodb = new TechItem("MongoDb", mongodbPic);
const node = new TechItem("Node JS", nodePic);
const html = new TechItem("HTML", htmlPic);
const css = new TechItem("CSS", cssPic);
const linux = new TechItem("Linux", linuxPic);
const react = new TechItem("React", reactPic);
const ocaml = new TechItem("OCaml", ocamlPic);
const sql = new TechItem("SQL", sqlPic);
const c = new TechItem("C", cPic);

const tech_stack: TechItem[] = [
  python,
  java,
  react,
  flutter,
  langchain,
  js,
  sql,
  ocaml,
  c,
  mongodb,
  linux,
  node,
  html,
  css,
];

export default tech_stack;
