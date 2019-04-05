import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';


const ContactUs = () => (
    <Container>
        <div id="contact">
            <h2 className="text-center">Get in touch with us!</h2>
            <br/>
            <Row>
                <Col sm={12} md={6}>
                    <Row>
                        <Col className="text-center">
                            <a href="https://www.google.com/maps/dir//eagle+pizza+bendigo" target="blank">
                                <span style={{fontSize: "3em", color: "Tomato"}}>
                                    <i className=" fas fa-map-marked-alt"></i>
                                </span>
                            </a>
                        </Col>
                        <Col>
                            <h4>Visit Us</h4>
                            <a href="https://www.google.com/maps/dir//eagle+pizza+bendigo" target="blank">
                                <p>91-97 Mcivor RD,<br/>Bendigo, VIC, 3660</p>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <a href="tel:+6154445551">
                                <span style={{fontSize: "3em", color: "Tomato"}}>
                                    <i className=" fas fa-phone"></i>
                                </span>
                            </a>
                        </Col>
                        <Col>
                            <h4>Call Us</h4>
                            <a href="tel:+6154445551">
                                <p>+6154445551</p>
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="text-center">
                            <a href="https://www.facebook.com/eaglepizzasbendigo/" target="blank">
                                <span style={{fontSize: "3em", color: "Tomato"}}>
                                    <i className=" fab fa-facebook-f"></i>
                                </span>
                            </a>
                        </Col>
                        <Col>
                            <h4>Like us on</h4>
                            <a href="https://www.facebook.com/eaglepizzasbendigo/" target="blank">
                                <p>Facebook</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col id=" contact-form" sm={12} md={6}>
                    <Form method=" POST" action=" http://formspree.io/eagleboysbendigo@gmail.com">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" name="Name" placeholder="Enter your name here!"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="Email" placeholder="Enter your email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicSubject">
                            <Form.Control type="subject" name="Subject" placeholder="Subject"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicTextarea">
                            <Form.Control type="message" name="Message" as="textarea" rows="3"
                                          placeholder="Please write your message here!"/>
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <div className="map-responsive">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12786.110874377115!2d144.2987963!3d-36.7579058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa03557833835d6d8!2sEagle+Pizzas+Bendigo!5e0!3m2!1sen!2sau!4v1554362728167!5m2!1sen!2sau"
                        width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
            </Row>
        </div>
        <
        /Container>
        )
        ;

        export default ContactUs;
