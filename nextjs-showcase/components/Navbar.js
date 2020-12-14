import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {NavbarItem} from "./NavbarItem";

const NavBar = ({pages}) => {

    return (
        <div className="NavBar">

            <ul>
                {pages.map((page) => (
                    <NavbarItem key={page.link} label={page.label} path={page.link} />
                ))}
            </ul>


        </div>
    );
}

export default NavBar;
