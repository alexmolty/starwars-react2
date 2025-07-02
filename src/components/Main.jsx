import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";
import friend7 from "../assets/friend7.jpg";
import friend8 from "../assets/friend8.jpg";
import friend9 from "../assets/friend9.jpg";
import {openingCrawl} from "../utils/constants.js";
import Hero from "../components/Hero";
import DreamTeam from "./DreamTeam.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
<DreamTeam/>
            <p className="farGalaxy">{openingCrawl}</p>
        </main>
    );
};

export default Main;