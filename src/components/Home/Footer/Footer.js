import React from 'react';
import './Footer.css';
import brandLogo from '../../../images/logo.png'
import { faFacebookSquare, faTwitter, faYoutube, faGooglePlusSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">

                <div className="row">
                    <div className="col-md-3">
                        <div className="brand-logo">
                            <img style={{height:"150px"}} src={brandLogo} alt="" />
                        </div>
                        <h5 className="text-white mt-1">
                            Follow Us On Social Media
                    </h5>
                        <div className="social-ico-container w-100">
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faFacebookSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faInstagramSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faTwitter} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faGooglePlusSquare} /></Link>
                            <Link to="/"><FontAwesomeIcon className="social-ico" icon={faYoutube} /></Link>
                        </div>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">CATEGORY</h4>
                        <h5>One Day Package</h5>
                        <h5>Two Day Package</h5>
                        <h5>Three Day Package</h5>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">QUICK LINK</h4>
                        <h5>About Us</h5>
                        <h5>Contact Us</h5>
                        <h5>Faq</h5>
                    </div>

                    <div className="col-md-2 text-white">
                        <h4 className="mb-4">CATALOG</h4>
                        <h5>Per-Wedding</h5>
                        <h5>Engagement</h5>
                        <h5>Wedding Album</h5>
                    </div>

                    <div className="col-md-3 text-white">
                        <h4 className="mb-4">Communcate With US</h4>
                        <h5><span className="me-2"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>Wedding Photography Agency,Bangladesh</h5>

                        <h5><span className="me-2"><FontAwesomeIcon icon={faPhoneAlt} /></span>01614563314</h5>

                        <h5><span className="me-2"><FontAwesomeIcon icon={faEnvelope} /></span>Support@Probir.Com</h5>

                        <h5><span className="me-2"><FontAwesomeIcon icon={faFax} /></span> Fax: 123456</h5>


                    </div>

                </div>
                <p className="text-center text-white pb-1">&copy; 2021 Website Developed by Probir Ghosh. </p>
            </div>
        </footer>
    );
};

export default Footer;