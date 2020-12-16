import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {NavbarItem} from "./NavbarItem";

const NavBar = ({pages}) => {

    return (
        <div className="NavBar">
            <ul>
                <li>
                    {pages.map((page) => (
                    <NavbarItem key={page.link} label={page.label} path={page.link} />
                    ))}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
