import {useEffect, useState} from "react";
import {BASEURL, monthMilliseconds} from "../../../utils/constants.js";
import Planet from "./Planet.jsx";

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    async function fetchPlanets() {
        const res = await fetch(`${BASEURL}/v1/planets`);
        const data = await res.json();
        setPlanets(data);
        localStorage.setItem('planets_data', JSON.stringify(data));
        const millisecondsCreation = new Date().getTime();
        localStorage.setItem('millisecondsCreation', millisecondsCreation.toString());
    }

    useEffect(() => {
        const planetsFromStorage = localStorage.getItem('planets_data');
        const millisecondsCreation = localStorage.getItem('millisecondsCreation');
        if (planetsFromStorage && millisecondsCreation && Number(millisecondsCreation) + monthMilliseconds >= new Date().getTime()) {
            setPlanets(JSON.parse(planetsFromStorage))
        } else {
            fetchPlanets()
                .then(() => console.log("Planets were loaded"));
        }
    }, [])

    return (<div className="form-group mb-3">
            <label className="form-label">Planet</label>
            <select className="form-select w-100" aria-label="Planet selection">
                <option>Select a planet</option>
                {planets.map(planet => (<Planet planet={planet.name} key={planet.id}/>))}
            </select>
        </div>);
};

export default Planets;