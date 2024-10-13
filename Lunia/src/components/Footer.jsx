import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Síguenos en nuestras redes</p>
      <div className="footer-links">
        <a
          className="footer-link"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </a>
        <a className="footer-link" href="https://www.x.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </div>
      <p className="footer-text">
        © 2024 Copyright:{" "}
        <a className="footer-link" href="https://levelup.com/">
          levelup.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
