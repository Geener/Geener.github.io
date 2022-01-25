import FoodOrderAppPic from "../images/foodOrderAppScreenshot.png"
import TASLAPic from "../images/TASLA.PNG"
import paddleBallPic from "../images/paddleBall.jpg"
import hangmanPic from "../images/hangman.PNG"
import carshopPic from "../images/carShopApp.jpg"
import TAMIDpic from "../images/TAMID.jpg"
import BikingAdventuresPic from "../images/TheBikingAdventures.png"
import McHacksPic from "../images/McHacks.png"
import goldenKeyClub from "../images/goldenKeyClub.jfif"
import hangmanTwilio from "../images/hangmanTwilio.PNG"

const projects = [{
    name: "Library Management Application",
    picture: TASLAPic,
    link: "https://www.youtube.com/watch?v=l8PWKT_hY7M&ab_channel=AdamGeenen"
},
{
    name: "Food Order App",
    picture: FoodOrderAppPic,
    link: "/food-order-app"
},
{
    name: "Hangman",
    picture: hangmanPic,
    link: "https://hangmanboy.netlify.app/"
},
{
    name: "Hangman Twilio",
    picture: hangmanTwilio,
    link: "https://youtu.be/t-ToQBkY5Mc"
},
{
    name: "Paddle Ball Game",
    picture: paddleBallPic,
    link: () => {
        alert("There is no link available")
    }
},
{
    name: "Car Shop Application",
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
        link: "https://youtu.be/t-ToQBkY5Mc",
        picture: McHacksPic
    },
    {
        name: "Golden Key Club",
        title: "Member",
        link: "https://www.mcgill.ca/deanofstudents/students/recognition/golden-key-honour-society",
        picture: goldenKeyClub
    },
]

export { projects, extraCurriculars };