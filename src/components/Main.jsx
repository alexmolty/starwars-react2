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