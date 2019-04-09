import React from 'react';
import {ButtonToolbar, Carousel, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ValueRange from '../static/images/value-range.jpg';
import LegendaryRange from '../static/images/legendary-range.jpg';
import TraditionalRange from '../static/images/traditional-range.jpg';

import Deal1 from '../static/images/deals-images/deal1.jpg';
import Deal2 from '../static/images/deals-images/deal2.jpg';
import Deal3 from '../static/images/deals-images/deal3.jpg';

const HomePage = () => (
    <div>
        <br/>
        <br/>
        <div className="d-flex justify-content-center">
            <Col xs md={7}>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Deal1} alt="First slide"/>
                        <Carousel.Caption className="text-left">
                            <span>1 Side</span><br/>
                            <span>1 Pizza</span><br/>
                            <span>1.25L Soft Drink</span><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Deal2} alt="Second Deal"/>
                        <Carousel.Caption className="text-left">
                            <span>2 Sides</span><br/>
                            <span>2 Pizzas</span><br/>
                            <span>1.25L Soft Drink</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Deal3} alt="Third Deal"/>
                        <Carousel.Caption className="text-left">
                            <span>2 Sides</span><br/>
                            <span>3 Pizzas</span><br/>
                            <span>1.25L Soft Drink</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </div>
        <br/>
        <br/>
        <Row className="justify-content-center">
            <ButtonToolbar>
                <a href="https://orderonline.eaglespizza.com.au/" target="_blank"
                   className="btn-outline-primary btn-lg">
                    Order Now
                </a>
            </ButtonToolbar>
            <ButtonToolbar>
                <a href="tel:+6154445551" className="btn-outline-primary btn-lg">
                    Call
                </a>
            </ButtonToolbar>
        </Row>
        <hr/>
        <div>
            <h1 className="center our-selection-header">OUR SELECTION </h1>
            <p className="center">
                Eagle Pizzas. The Taste That Has Developed Into the Three Finest Categories
            </p>
        </div>

        <Row className="justify-content-center">
            <div>
                <Link to="/value-pizzas">
                    <img className="menu-pics pointer" alt={ValueRange} src={ValueRange}/>
                </Link>
            </div>
            <div className="product-desc-home">
                <p>
                    On a budget? Try our Value Range!
                </p>
            </div>
        </Row>
        <Row className="justify-content-center">
            <div>
                <Link to="/traditional-pizzas">
                    <img className="menu-pics pointer" alt={TraditionalRange} src={TraditionalRange}/>
                </Link>
            </div>
            <div className="product-desc-home">
                <p>
                    Keeping it simple? Try the Traditional Range!
                </p>
            </div>
        </Row>
        <Row className="justify-content-center">
            <div>
                <Link to="/legendary-pizzas">
                    <img className="menu-pics pointer" alt={LegendaryRange} src={LegendaryRange}/>
                </Link>
            </div>
            <div className="product-desc-home">
                <p>
                    Love your Pizzas? Try the Legendary Range!
                </p>
            </div>
        </Row>
        <ButtonToolbar>
            <Link to="/products" className="btn-outline-primary btn-lg">
                Our Menu
            </Link>
        </ButtonToolbar>
    </div>
);

export default HomePage;
