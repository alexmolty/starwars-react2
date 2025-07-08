import {navItems} from "../../utils/constants.js";
import StarWars from "./starWars/StarWars.jsx";
import Contact from "./contact/Contact.jsx";
import AboutMe from "./aboutMe/AboutMe.jsx";
import Home from "./home/Home.jsx";

const Main = ({page}) => {
    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
};

export default Main;