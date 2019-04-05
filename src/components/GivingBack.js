import React from 'react';
import rfl from '../static/images/RFLWhite.png';
import bendigoeast from '../static/images/bendigoeast.png';
import Axedalesmall from '../static/images/Axedalesmall.png';
import camphill from '../static/images/camphill.png';
import falcons from '../static/images/falcons.png';
import maidengully from '../static/images/maidengullywhite.png';
import springgully from '../static/images/springgully.png';
import {ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const GivingBack = () => (
        <div className="gbbody">
            <h2>Giving back to the community</h2>
            <br/>
            <div className="gbboxstyle">
                <h3 className="gbboxheading">Relay for life | NFP | Cancer Council</h3>
                <br/>
                <img width="30%" alt={rfl} src={rfl}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="iframe-wrapper">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/DW7uDSrZnfk" frameBorder="0"
                            allowFullScreen>
                    </iframe>
                </div>
                <br/>
                <br/>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="gbboxstyle ">
                <br/>
                <h1 className="gbboxheading">Sports Clubs</h1>
                <div className="gblogos">
                    <figure>
                        <img className="gbpics2" alt={springgully} src={springgully}/>
                        <figcaption>Spring Gully Soccer Club</figcaption>
                    </figure>
                    <figure>
                        <img className="gbpics2" alt={falcons} src={falcons}/>
                        <figcaption>Falcons Baseball Club</figcaption>
                    </figure>
                </div>
                <div className="gblogos">
                    <figure>
                        <img className="gbpics2" alt={bendigoeast} src={bendigoeast}/>
                        <figcaption>Bendigo East Bowling Club</figcaption>
                    </figure>
                    <figure>
                        <img className="gbpics2" alt={maidengully} src={maidengully}/>
                        <figcaption>Maiden Gully YCW Eagles Football & Netball Club</figcaption>
                    </figure>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="gbboxstyle">
                <h1 className="gbboxheading">Others</h1>
                <div className="gblogos">
                    <figure>
                        <img className="gbpics2" alt={Axedalesmall} src={Axedalesmall}/>
                        <figcaption>Axedale Quick Shear</figcaption>
                    </figure>
                    <figure>
                        <img className="gbpics2" alt={camphill} src={camphill}/>
                        <figcaption>Camphill Primary School</figcaption>
                    </figure>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <h1 className="gbboxheading">Join Our Family</h1>
            <p className="gbtext2">
                Eagle Pizzas has been giving back to the community for over 14 years. Find how we can help you become a part
                of the family. Contact us today!
            </p>
            <br/>
            <ButtonToolbar>
                <Link to="/contactus" className="btn-outline-primary btn-lg">
                    Enquire Today
                </Link>
            </ButtonToolbar>
        </div>
    )
;

export default GivingBack;
