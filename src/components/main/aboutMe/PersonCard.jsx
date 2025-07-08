import {personFields} from "../../../utils/constants.js";
import PersonCardLine from "./PersonCardLine.jsx";
import Hero from "../home/Hero.jsx";

function PersonCard({person}) {
    return (
        <div className="d-flex flex-column align-items-center flex-wrap">
            <Hero/>
            {personFields.map(field => <PersonCardLine key={field.key} label={field.label} value={person[field.key]}/>)}
        </div>);
}

export default PersonCard;