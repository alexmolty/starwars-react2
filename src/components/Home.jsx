import {openingCrawl} from "../utils/constants.js";
import DreamTeam from "./DreamTeam.jsx";
import Hero from "./Hero.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <p className="farGalaxy">{openingCrawl}</p>
        </main>
    );
};

export default Home;