import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>
              © 2023 Studio Latin Evolution Company. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
