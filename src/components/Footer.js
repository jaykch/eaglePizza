import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../static/images/logo.png';

const Footer = () => (
    <div className="footer-container">
        <hr/>
        <br/>
        <AnchorLink href="#header">
            <div className="center">
                <img className="footer-logo" alt={Logo} src={Logo}></img>
            </div>
        </AnchorLink>
        <div className="footer-links">
            <div className="center sm-col sm-col-4">
                <h3 className="">Operating Hours</h3>
                <div>
                    <span className="footer-links-text">
                        Sunday - Monday: 11am - 10pm
                    </span>
                    <span className="footer-links-text">
                        Tuesday - Thursday: 11am - 11pm
                    </span>
                    <span className="footer-links-text">
                        Friday - Saturday: 11am - 12am
                    </span>
                    <span className="footer-links-text">
                        Public Holidays: 12pm - 8pm
                    </span>
                </div>
            </div>

            <div className="center sm-col sm-col-4">
                <h3 className="">Quick Links</h3>
                <div>
                    <Link to="/">
                        <span className="footer-links-text">Home</span>
                    </Link>
                    <Link to="/products">
                        <span className="footer-links-text">Our Menu</span>
                    </Link>
                    <Link to="/giving-back">
                        <span className="footer-links-text">Giving back</span>
                    </Link>
                    <Link to="/aboutus">
                        <span className="footer-links-text">About us</span>
                    </Link>
                    <Link to="/contactus">
                        <span className="footer-links-text">Contact Us</span>
                    </Link>
                </div>
            </div>

            <div className="center sm-col sm-col-4">
                <h3 className="">Contact Info</h3>
                <div>
                    <span className="footer-links-text">
                        Address: 91-97 MCIVOR RD,
                    </span>
                    <span className="footer-links-text">
                        Bendigo, VIC, 3550
                    </span>
                    <span className="footer-links-text">
                        Phone Number: 5444 5551
                    </span>
                </div>
            </div>

        </div>
        <hr/>
        <br/>
        <div className="footer-btm">
            <p className="social-links">Copyright Eagle Pizzas Bendigo 2019</p>
        </div>

    </div>
);

export default Footer;