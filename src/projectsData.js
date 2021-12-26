import FoodOrderAppPic from "./images/foodOrderAppScreenshot.png"
import TASLAPic from "./images/TASLA.PNG"
import CVPic from "./images/cv.png"
import GradesPic from "./images/grades.png"
import paddleBallPic from "./images/paddleBall.jpg"

const projects = [{
        name: "Library Management Application",
        description: "•End-to-end application with a web and android app" + "\n" + "•Allows users to create an account, log in, modify account info, reserve titles and rooms\n•Allows librarians to create, modify and checkout titles, hire/fire librarians and edit the staff and library schedule.",
        builtWith: "•Java, Vue.js, Java Spring Boot, Gradle, Android Studio, Hibernate and UML class diagram.\n •Heroku database. •Tested with JUnit",
        picture: TASLAPic,
        link: "https://www.youtube.com/watch?v=l8PWKT_hY7M&ab_channel=AdamGeenen"
    },
    {
        name: "Food Order App",
        description: "This is an app to order food",
        builtWith: "React / CSS / HTML",
        picture: FoodOrderAppPic,
        link: "/food-order-app"
    },
    {
        name: "Paddle Ball Game",
        description: "This is a ping-pong game",
        builtWith: "Java",
        picture: paddleBallPic,
        link: "/"
    },
    {
        name: "Car Shop Application",
        description: "This is a ping-pong game",
        builtWith: "Java",
        picture: null,
        link: "/"
    },
]

export {
    projects,
    CVPic,
    GradesPic
};