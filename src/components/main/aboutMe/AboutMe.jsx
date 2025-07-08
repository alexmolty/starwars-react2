import {useEffect, useState} from "react";
import {BASEURL} from "../../../utils/constants.js";
import PersonCard from "./PersonCard.jsx";

const AboutMe = () => {
    const [LukeSkywalker, setLukeSkywalker] = useState(null)
    useEffect(() => {
        fetch(`${BASEURL}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setLukeSkywalker(data))
    }, [])
    if (LukeSkywalker) {
        return (
            <div className="farGalaxy">
                <PersonCard person={LukeSkywalker}/>
            </div>
        );
    } else {
        return (
            <div className="farGalaxy d-flex justify-content-center align-items-center">
                <p className="spinner-border"></p>
            </div>)
    }

};

export default AboutMe;