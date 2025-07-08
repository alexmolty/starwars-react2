import {useEffect, useState} from "react";
import {BASEURL} from "../../../utils/constants.js";
import Planet from "./Planet.jsx";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        fetch(`${BASEURL}/v1/planets`)
            .then(res => res.json())
            .then(data => setPlanets(data))
    }, [])
    return (
        <div className="form-group mb-3">
            <label className="form-label">Planet</label>
            <select className="form-select w-100" aria-label="Planet selection">
                <option>Select a planet</option>
                {planets.map(planet => (<Planet planet={planet.name} key={planet.id}/>))}
            </select>
        </div>
    );
};

export default Planets;