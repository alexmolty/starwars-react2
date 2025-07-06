import {dreamTeam} from "../../utils/constants.js";

const FriendsImages = () => {
    return (
        <>
            {dreamTeam.map((friend, index) => {
                    let className = "col-sm-4 p-1";

                    if (index === 6) {
                        className += " bottomLeft";
                    } else if (index === 8) {
                        className += " bottomRight";
                    }
                    return (
                        <img
                            key={friend}
                            src={friend}
                            className={className}
                            alt="Friend"
                        />
                    )
                }
            )}
        </>
    );
};

export default FriendsImages;