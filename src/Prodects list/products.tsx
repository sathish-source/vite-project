import './products.css'
import tomatoImage from "./tomato.jpg"; // Import the image
import carrotImage from "./carrot.jpg";
import broccoliImage from "./broccoli.jpg";
import beetrootImage from "./beetroot.jpg";
import greenchiliImage from './Fresh-Chili.jpg';
import redonionImage from './red-onion.jpg';
import cauliflowerImage from './cauliflower.jpg';
import potatoImage from './potato.jpg';
import garlicImage from './garlic.jpg';
import coconutImage from './coconut.jpg'



const VegetableProducts = () => {
    return (
        <div className="vegetable-products">
            <h1>Vegetable Products</h1>
            <div className="product-list">
                <div className="product-card">
                    <img src={tomatoImage} alt="Tomato" className="product-image" />
                    <h2>Tomato</h2>
                    <p>Fresh and juicy tomatoes.</p>
                    <p>$50</p>
                </div>
                <div className="product-card">
                    <img src={carrotImage} alt="Carrot" className="product-image" />
                    <h2>Carrot</h2>
                    <p>Sweet and crunchy carrots.</p>
                    <p>$99</p>
                </div>
                <div className="product-card">
                    <img src={broccoliImage} alt="Broccoli" className="product-image" />
                    <h2>Broccoli</h2>
                    <p>Healthy and green broccoli.</p>
                    <p>$49</p>
                </div>
                <div className="product-card">
                    <img src={beetrootImage} alt="beetroot" className="product-image" />
                    <h2>Beetroot</h2>
                    <p>Healthy And Reddish</p>
                    <p>$24</p>
                </div>
                <div className="product-card">
                    <img src={greenchiliImage} alt="greenchilli" className="product-image" />
                    <h2>Green Chili</h2>
                    <p>Hot And Spicy Chili's</p>
                    <p>$9</p>
                </div>
                <div className="product-card">
                    <img src={redonionImage} alt="redonion" className="product-image" />
                    <h2>Red Onions</h2>
                    <p>Fresh Red Onions</p>
                    <p>$80</p>
                </div>
                <div className="product-card">
                    <img src={cauliflowerImage} alt="redonion" className="product-image" />
                    <h2>Couliflower</h2>
                    <p>Healthy and Fresh Couliflower's </p>
                    <p>$60</p>
                </div>
                <div className="product-card">
                    <img src={potatoImage} alt="redonion" className="product-image" />
                    <h2>Potato</h2>
                    <p>Healthy and Selected Potato's</p>
                    <p>$35</p>
                </div>
                <div className="product-card">
                    <img src={garlicImage} alt="redonion" className="product-image" />
                    <h2>Garlic</h2>
                    <p>Fresh Garlic's</p>
                    <p>$160</p>
                </div>
                <div className="product-card">
                    <img src={coconutImage} alt="redonion" className="product-image" />
                    <h2>Coconut</h2>
                    <p>Fresh Brown Coconut</p>
                    <p>$20</p>
                </div>
            </div>
        </div>
    );
};

export default VegetableProducts;