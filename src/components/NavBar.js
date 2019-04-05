import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Link to="/" className="nav-link">
                    <span>Home</span>
                </Link>
            </Nav>
            <NavDropdown title="Our Menu" id="collasible-nav-dropdown">
                <Link to="/products" className="dropdown-item">All Items</Link>
                <NavDropdown.Divider/>
                <Link to="/value-pizzas" className="dropdown-item">Value</Link>
                <Link to="/traditional-pizzas" className="dropdown-item">Traditional</Link>
                <Link to="/legendary-pizzas" className="dropdown-item">Legendary</Link>
                <Link to="/sides" className="dropdown-item">Sides</Link>
            </NavDropdown>
            <Nav>
                <Link to="/giving-back" className="nav-link">
                    <span>Giving Back</span>
                </Link>
            </Nav>
            <Nav>
                <Link to="/aboutus" className="nav-link">
                    <span>About Us</span>
                </Link>
            </Nav>
            <Nav>
                <Link to="/contactus" className="nav-link">
                    <span>Contact Us</span>
                </Link>
            </Nav>
            <Nav>
                <a href="https://orderonline.eaglespizza.com.au/" className="nav-link" target="_blank">
                    <span>Order Now</span>
                </a>
            </Nav>
        </Navbar.Collapse>
    </Navbar>  //
    // <div className="our-navbar flex fit">
    //
    //   <div className="navbar-item">
    //     <Link to="/">
    //       <p className="center navbar-text">HOME</p>
    //     </Link>
    //   </div>
    //
    //   <div className="navbar-item dropdown">
    //
    //     <Link to="/products">
    //       <p className="center navbar-text dropbtn" >OUR MENU</p>
    //     </Link>
    //
    //       <div className="dropdown-content">
    //
    //       <Link className="dropdown-links" to="/value-pizzas">
    //           <a>Value</a>
    //         </Link>
    //
    //         <Link className="dropdown-links"  to="/traditional-pizzas">
    //           <a>Traditional</a>
    //         </Link>
    //
    //         <Link className="dropdown-links" to="/legendary-pizzas">
    //           <a>Legendary</a>
    //         </Link>
    //
    //         <Link className="dropdown-links" to="/sides">
    //           <a>Sides</a>
    //         </Link>
    //
    //       </div>
    //
    //   </div>
    //
    //
    //
    //   <div className="navbar-item">
    //     <Link to="/giving-back">
    //       <p className="center navbar-text" >GIVING BACK</p>
    //     </Link>
    //   </div>
    //   <div className="navbar-item">
    //     <Link to="/aboutus">
    //       <p className="center navbar-text" >ABOUT US</p>
    //     </Link>
    //   </div>
    //   <div className="navbar-item">
    //     <Link to="/contactus">
    //       <p className="center navbar-text" >CONTACT US</p>
    //     </Link>
    //   </div>
    //
    //   <div className="navbar-item order-now">
    //     <Link to="/">
    //       {/* <button className="order-now pointer"> */}
    //         <p className="center navbar-text" > ORDER NOW </p>
    //       {/* </button> */}
    //
    //     </Link>
    //   </div>
    //
    // </div>

);

export default NavBar;