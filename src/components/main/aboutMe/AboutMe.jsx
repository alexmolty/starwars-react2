import {useEffect, useState} from "react";
import {BASEURL, monthMilliseconds} from "../../../utils/constants.js";
import PersonCard from "./PersonCard.jsx";

const AboutMe = () => {
    const [lukeSkywalker, setLukeSkywalker] = useState(null)
    useEffect(() => {
        const lukeStorage = localStorage.getItem("luke");
        const millisecondsCreation = localStorage.getItem("lukeMillisecondsCreation");
        if (lukeStorage && millisecondsCreation && Number(millisecondsCreation) + monthMilliseconds >= new Date().getTime()) {
            setLukeSkywalker(lukeStorage)
        } else {
            fetch(`${BASEURL}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('luke', JSON.stringify(data));
                    const millisecondsCreation = new Date().getTime();
                    localStorage.setItem('lukeMillisecondsCreation', millisecondsCreation.toString());
                    setLukeSkywalker(data)
                })
        }
    }, [])
    if (lukeSkywalker) {
        return (<div className="farGalaxy">
                <PersonCard person={lukeSkywalker}/>
            </div>);
    } else {
        return (<div className="farGalaxy d-flex justify-content-center align-items-center">
            <p className="spinner-border"></p>
        </div>)
    }

};

export default AboutMe;