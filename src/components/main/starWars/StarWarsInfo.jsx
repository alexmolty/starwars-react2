import {starWarsInfo} from "../../../utils/constants.js";

const StarWarsInfo = () => {
    return (
        <div className="m-3">
            {starWarsInfo.map((p, index) => <p className="pb-5" key={index}>{p[0]}</p>)}
        </div>
    );
};

export default StarWarsInfo;