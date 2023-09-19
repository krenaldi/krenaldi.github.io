import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoK from '../../assets/images/logo-K.png';
import LogoSub from '../../assets/images/logo-sub-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoK} alt="logo" />
        <img className="sub-logo" src={LogoSub} alt="subtitle logo" />
      </Link>
      <nav>
        <NavLink exact="true" to="/" activeclassname="active">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className="about-link"
          exact="true"
          to="/about"
          activeclassname="active"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className="portfolio-link"
          exact="true"
          to="/portfolio"
          activeclassname="active"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          className="contact-link"
          exact="true"
          to="/contact"
          activeclassname="active"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/krenaldi/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/krenaldi"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
