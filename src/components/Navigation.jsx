import NavItem from "./NavItem.jsx";
import {navItems} from '../utils/constants.js';

const Navigation = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-1 ms-5">
                {navItems.map(item => <NavItem key={item} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;