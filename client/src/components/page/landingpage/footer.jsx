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
		<p className = "t1">Ankit Raj</p>
		<ul className="social-links">
            <li>
              <a href="https://www.instagram.com/ankit_raj.2002/">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/
ankit-raj-552107277">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ankitraj-2002">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
		</ul>
		</div>
		<div>
		<p className="t1">Mayank Lohani</p>
		<ul className="social-links">
            <li>
              <a href="https://www.instagram.com/mayank_lohani328/">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mayank-lohani/">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mayank328?tab=repositories">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
		</ul>
		</div>
		  </div>
          <div className="copyright">
            <p>Developed Under</p>
			<img className = "footer-img" src = {stpi_logo_footer} alt =""></img>
          </div>
      </div>
    </footer>
  );
};

export default Footer;