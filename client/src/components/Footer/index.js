import React from "react";
import KHLogo from "../../assets/KH-LOGO-sm.png"
import resume from '../../assets/K.-Hartman-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faFileInvoice  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Footer() {
return (
  <footer className="text-white">
    <div className="row px-2 row text-center">
      <div className="col-lg-4 col-sm-12">
        <a className='footer-icon px-3' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className='footer-icon px-3' target="_blank" rel="noreferrer" href="https://github.com/konnerhartman"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a className='footer-icon px-3' href="tel:214-226-4278"><FontAwesomeIcon icon={faMobileAlt} /></a>
        <a className='footer-icon px-3' href={resume}><FontAwesomeIcon icon={faFileInvoice} /></a>
      </div>
      <div className="col-lg-2 d-none d-sm-block"></div>
      <div className="col-lg-2 d-none d-sm-block"></div>
      <p className="col-lg-4 col-sm-12">Website built by:
        <a className="text-decoration-none p-2" href="https://github.com/konnerhartman">
          <img height="18rem" src={KHLogo} alt="Konner Hartman Logo" />
        </a>
      </p>
    </div>
  </footer>
)
};

export default Footer;