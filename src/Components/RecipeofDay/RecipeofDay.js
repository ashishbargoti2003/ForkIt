// RestaurantComponent.js
import React from 'react';
import './RecipeofDay.css';
import main_b from '../Assets/main-b.jpg';


const RecipeofDay = () => {
    return (
        <div className="restaurant-container">
            <div className="text-section">
                <div className="text-wrapper">
                    <h1>Welcome To <br /> Our Restaurant <span>Hungry To Eat</span></h1>
                    <p>Wake up your taste buds. Discover flavors that you've never experienced before. We are here to redefine your taste journey.</p>
                    <button className="order-button">Check</button>
                </div>
            </div>
            <div className="image-section">
                <img src={main_b} alt="Orange Mojito" className="drink-image" />
                <div className="drink-description">
                    <h3>Orange Mojito</h3>
                    <p>A refreshing blend of citrus and mint to tantalize your senses.</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeofDay;
