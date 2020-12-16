import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

import {SocialsItem} from "./SocialbarItem";
const Socials = ({pages}) => {

    return (
        <div className="Socials">
                    {pages.map((page) => (
                    <SocialsItem key={page.link} label={page.label} path={page.link} />
                    ))}
        </div>
    );
}

export default Socials;
