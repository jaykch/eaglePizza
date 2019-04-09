import React from 'react';
import ChickTorte from '../../static/images/Sides/chicken-tortellini.jpg';
import Lasagne from '../../static/images/Sides/lasagne.jpg';
import PorkRibs from '../../static/images/Sides/pork-ribs.jpg';
import SpagBolo from '../../static/images/Sides/spaghetti-bolognaise.jpg';
import VegLasa from '../../static/images/Sides/vegetable-lasagne.jpg';
import Wings1 from '../../static/images/Sides/wings-1.jpg';
import Default from '../../static/images/value/logo.png';

const Sides = () => (

    <div>
        <h1 className="menu-header">Sides</h1>

        <hr/>
        <br/>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={ChickTorte} src={ChickTorte}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Chicken Tortellini $8.50
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Lasagne} src={Lasagne}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Lasagne $8.50
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={PorkRibs} src={PorkRibs}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Pork Ribs - $8.50
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={SpagBolo} src={SpagBolo}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Spaghetti Bolognaise $8.50
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={VegLasa} src={VegLasa}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Vegetable Lasagne $8.50
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Wings1} src={Wings1}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Chicken Wings - Available as Buffalo, Texan BBQ or Flaming! $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Garlic Bread - $3.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Mozzarella Sticks - $4.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Chicken Bites - <br/>15 pack - $5.95 <br/>
                    30 pack - $8.95

                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Potato Wedges - $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Potato Gems - $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Share Pack (Gems, Wedges, Chicken Wings and Chicken Bites) - $11
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Dipping Sauces Available – BBQ, Sweet Chilli, Garlic Aioli, Ranch, Chipotle, Sour Cream
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    4 Pack Ice Creams (Assorted Flavours) $7.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Single Serve Vanilla Ice Cream - $2.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Hot Choc Ooze Cake - $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Churros with Choc Dipping Sauce - $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Oreo Cheese Cake with Ice Cream - $5.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Apple Tart - $3.95
                </p>
            </div>
        </div>

        <div className="product-container">
            <div className="product-image">
                <a href="https://orderonline.eaglespizza.com.au/">
                    <img className="menu-pics pointer" alt={Default} src={Default}/>
                </a>
            </div>
            <div className="product-desc">
                <p>
                    Chocolate Bavarian Cheesecake - $8.95
                </p>
            </div>
        </div>

    </div>
);

export default Sides;