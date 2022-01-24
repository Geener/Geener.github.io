import FoodOrderAppPic from "../images/foodOrderAppScreenshot.png"
import TASLAPic from "../images/TASLA.PNG"
import paddleBallPic from "../images/paddleBall.jpg"
import hangmanPic from "../images/hangman.PNG"
import carshopPic from "../images/carShopApp.jpg"
import TAMIDpic from "../images/TAMID.jpg"
import BikingAdventuresPic from "../images/TheBikingAdventures.png"
import McHacksPic from "../images/McHacks.png"



const projects = [{
    name: "Library Management Application",
    descriptions: ["•End-to-end application with a web and android app", "•Allows users to create an account, log in, modify account info, reserve titles and rooms", "•Allows librarians to create, modify and checkout titles, hire/fire librarians and edit the staff and library schedule."],
    picture: TASLAPic,
    link: "https://www.youtube.com/watch?v=l8PWKT_hY7M&ab_channel=AdamGeenen"
},
{
    name: "Food Order App",
    descriptions: ["•Inspired by the food terminals at fast food restaurants", "•Allows users to view the menu, select items and customize their order"],
    picture: FoodOrderAppPic,
    link: "/food-order-app"
},
{
    name: "Paddle Ball Game",
    descriptions: ["•Allows user to play versus a computer controlled opponent", "•Scoreboard with game history", "•Able to adjust game settings"],
    picture: paddleBallPic,
    link: () => {
        alert("There is no link available")
    }
},
{
    name: "Hangman",
    descriptions: ["•Allows users to play hangman game", "•Words are taken from an API", "•Can adjust game difficulty"],
    picture: hangmanPic,
    link: "https://hangmanboy.netlify.app/"
},
{
    name: "Car Shop Application",
    descriptions: ["•Allows managers and technicians to schedule and edit appointments", "•Allows customers to manage and book different appointments"],
    picture: carshopPic,
    link: () => {
        alert("There is no link available")
    }
},
]

const extraCurriculars = [{
        name: "TAMID Tech Track",
        title: "Project Manager",
        link: "https://tamidgroup.org/",
        picture: TAMIDpic
    }, 
    {
        name: "The Biking Adventures",
        title: "Co-Founder",
        link: "https://www.facebook.com/TheBikingAdventures",
        picture: BikingAdventuresPic
    },
    {
        name: "McHacks",
        title: "Participant",
        link: null,
        picture: McHacksPic
    }
]

export { projects, extraCurriculars };