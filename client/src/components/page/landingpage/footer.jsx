import React from 'react';
import './footer.css'; // Import your CSS file
import '@fortawesome/fontawesome-free/css/all.css';
import stpi_logo_footer from '../../images/stpi_logo_footer.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
		<p className="footer-title">Team Members</p>
		<hr></hr>
        <div className="footer-content">
		<div>
		<p className = "t1">Ankit</p>
		<ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
		</ul>
		</div>
		<div>
		<p className="t1">Mayank</p>
		<ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
		</ul>
		</div>
		  </div>
          <div className="copyright">
            <p>Developed Under</p>
			<img className = "footer-img" src = {stpi_logo_footer}></img>
          </div>
      </div>
    </footer>
  );
};

export default Footer;