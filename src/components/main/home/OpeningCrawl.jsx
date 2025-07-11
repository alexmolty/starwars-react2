import {BASEURL} from "../../../utils/constants.js";
import {useEffect, useState} from "react";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState('');
    useEffect(() => {
        const opening___Crawl = sessionStorage.getItem("opening_crawl");
        if (opening___Crawl) {
            setOpeningCrawl(opening___Crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${BASEURL}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, [])

    if (openingCrawl) {
        return (<p className="farGalaxy">
                {openingCrawl}
            </p>);
    } else {
        return (<p className="farGalaxy spinner-border"></p>)
    }

};

export default OpeningCrawl;