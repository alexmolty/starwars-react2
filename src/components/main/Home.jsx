import DreamTeam from "./DreamTeam.jsx";
import Hero from "./Hero.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;