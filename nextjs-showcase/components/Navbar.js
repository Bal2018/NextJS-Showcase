import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const NavBar = ({pages}) => (
    <div className="NavBar">
        NAVBAR{`
      background-color: blue;
      color: white;
      width: 100%;
      height: 60px;
    `}

        <ul>
            {pages.map(page => {
                return <li><a href={page.url}>{page.label}</a></li>
            })}
        </ul>

        <ul className="social">
            <li><a target="_blank" href="https://twitter.com/balhayre"><FontAwesomeIcon icon={faTwitter}/></a></li>
            <li><a target="_blank" href="https://github.com/Bal2018"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a target="_blank" href="https://linkedin.com/in/baljinder-hayre-8344296a"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            {/*<li><a href="mailto:bk.actions@gmail.com"><i className="fas fa-envelope-open-text"></i></a></li>*/}
        </ul>
    </div>
);

export default NavBar;
