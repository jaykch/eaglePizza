import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';
import GivingBack from './components/GivingBack'
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Value from './components/OurMenu/Value';
import Legendary from './components/OurMenu/Legendary';
import Traditional from './components/OurMenu/Traditional';
import Sides from './components/OurMenu/Sides';
import Products from './components/OurMenu/Products';

const App = () => (
    <Router>
        <main>
            <Header/>
            <NavBar/>
            <div>
                <div className="index-overlay">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/giving-back" component={GivingBack}/>
                        <Route path="/aboutus" component={AboutUs}/>
                        <Route path="/contactus" component={ContactUs}/>
                        <Route path="/value-pizzas" component={Value}/>
                        <Route path="/traditional-pizzas" component={Traditional}/>
                        <Route path="/legendary-pizzas" component={Legendary}/>
                        <Route path="/sides" component={Sides}/>
                        <Route path="/products" component={Products}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </main>
    </Router>
);

export default App;
