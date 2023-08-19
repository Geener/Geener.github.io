import McGill_logo from "../images/projects/McGill_logo.png";
import hangman_twilio from "../images/projects/hangman_twilio.png";
import hangman from "../images/projects/hangman.png";
import food_order from "../images/projects/food_order.png";
import TASLA from "../images/projects/TASLA.png";
import paddle_ball from "../images/projects/paddle_ball.jpg";

interface projects_data {
  title: string;
  dates: string;
  img_path: string;
  description: string;
  link: string;
}

const McGill_GPT: projects_data = {
  title: "McGill GPT",
  dates: "AUG 2023",
  img_path: McGill_logo,
  description: "Got shit done",
  link: "www.google.com",
};

const Library_Management_app: projects_data = {
  title: "Library Manager",
  dates: "DEC 2021",
  img_path: TASLA,
  description: "Got shit done",
  link: "https://www.youtube.com/watch?v=l8PWKT_hY7M&ab_channel=AdamGeenen",
};

const Food_Order_app: projects_data = {
  title: "Custom Eats",
  dates: "NOV 2021",
  img_path: food_order,
  description: "Got shit done",
  link: "/food-order-app",
};

const Hangman: projects_data = {
  title: "Hangman",
  dates: "MAY 2021",
  img_path: hangman,
  description: "Got shit done",
  link: "https://hangmanboy.netlify.app/",
};

const Hangman_Twillio: projects_data = {
  title: "Hangman",
  dates: "JAN 2022",
  img_path: hangman_twilio,
  description: "Got shit done",
  link: "https://youtu.be/t-ToQBkY5Mc",
};

const Paddle_Ball: projects_data = {
  title: "Paddle Ball",
  dates: "DEC 2020",
  img_path: paddle_ball,
  description: "Got shit done",
  link: "www.google.com",
};

const projects: projects_data[] = [
  McGill_GPT,
  Hangman_Twillio,
  Library_Management_app,
  Food_Order_app,
  Hangman,
  Paddle_Ball,
];

export default projects;
