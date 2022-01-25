import FoodOrderAppPic from "../images/foodOrderAppScreenshot.png"
import TASLAPic from "../images/TASLA.PNG"
import CVPic from "../images/cv.png"
import GradesPic from "../images/grades.png"
import paddleBallPic from "../images/paddleBall.jpg"
import hangmanPic from "../images/hangman.PNG"
import carshopPic from "../images/carShopApp.jpg"
import hangmanTwilio from "../images/hangmanTwilio.PNG"


const projects = [{
    name: "Library Management Application",
    descriptions: ["•End-to-end application with a web and android app", "•Allows users to create an account, log in, modify account info, reserve titles and rooms", "•Allows librarians to create, modify and checkout titles, hire/fire librarians and edit the staff and library schedule."],
    builtWith: ["•Java", "•Vue.js", "•Java Spring Boot", "•Gradle", "•Android Studio", "•Hibernate", "•UML class diagram", "•Heroku database.", "•Tested with JUnit"],
    picture: TASLAPic,
    link: "https://www.youtube.com/watch?v=l8PWKT_hY7M&ab_channel=AdamGeenen"
},
{
    name: "Food Order App",
    descriptions: ["•Inspired by the food terminals at fast food restaurants", "•Allows users to view the menu, select items and customize their order"],
    builtWith: ["•React"],
    picture: FoodOrderAppPic,
    link: "/food-order-app"
},
{
    name: "Hangman",
    descriptions: ["•Allows users to play hangman game", "•Words are taken from an API", "•Can adjust game difficulty"],
    builtWith: ["•JavaScript", "•API"],
    picture: hangmanPic,
    link: "https://hangmanboy.netlify.app/"
},
{
    name: "Car Shop Application",
    descriptions: ["•Allows managers and technicians to schedule and edit appointments", "•Allows customers to manage and book different appointments"],
    builtWith: ["•Java", "•Gradle", "•UML class diagram", "•State Diagrams", "•Tested with JUnit"],
    picture: carshopPic,
    link: () => {
        alert("There is no link available")
    }
},
{
    name: "Hangman Twilio",
    descriptions: ["•Built for McHacks 9", "•Hangman game using Twilio API"],
    builtWith: ["•JavaScript", "•Twilio API"],
    picture: hangmanTwilio,
    link: "https://youtu.be/t-ToQBkY5Mc"

},
{
    name: "Paddle Ball Game",
    descriptions: ["•Allows user to play versus a computer controlled opponent", "•Scoreboard with game history", "•Able to adjust game settings"],
    builtWith: ["•Java", "•ACM Library"],
    picture: paddleBallPic,
    link: () => {
        alert("There is no link available")
    }
},
]

export {
    projects,
    CVPic,
    GradesPic
};