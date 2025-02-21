import React from 'react';
import './Menu.css';


const menuData = {
    coffee: [
        { name: 'Espresso', price: '3.00' },
        { name: 'Macchiato', price: '3.50' },
        { name: 'Cortado', price: '3.50' },
        { name: 'Cappuccino', price: '3.75' },
        { name: 'Flat White', price: '3.75' },
        { name: 'Americano', price: '4.50' },
        { name: 'Latte', price: '4.50' },
        { name: 'Espresso Milkshake', price: '7.00' },
        { name: 'Black Drip Coffee', price: '2.75' },
        { name: 'Cold Brew', price: '5.00' },

    ],
    tea: [
        { name: 'London Fog', price: '4.00' },
        { name: 'Chai Tea', price: '4.50' },
        { name: 'Tea', price: '3.50', description: 'Choice of Earl Grey, Jasmine, Peppermint, or Flavor of the Month' },
        { name: 'Hot Chocolate', price: '4.00' },
        { name: 'Steamer', price: '3.00' },
        { name: 'Italian Soda', price: '5.00', description: 'Choice of Lavendar, Vanilla, Passionfruit, Strawberry, Coconut, Pineapple, or Watermelon' },
        { name: 'Matcha Latte', price: '6.25' },

    ],
    wine: [
        { name: 'House Red', price: '9 / 32' },
        { name: 'House White', price: '8 / 30' },
        { name: 'Prosecco', price: '10 / 36' },
        
    ],
    food: [
        { name: 'Artisanal Cheese Board', price: '16' },
        { name: 'Croissant', price: '4.50' },
        { name: 'Avocado Toast', price: '12' },
        
    ],
    additions: {
        sizes: {
            hot: ['Traditional', '12oz', '16oz'],
            iced: ['16oz', '20oz',]
        },
        milks: [
            { name: 'Oat Milk', price: '0.75' },
            { name: 'Almond Milk', price: '0.75' },
        
        ],
        syrups: [
            { name: 'Vanilla', price: '0.70' },
            { name: 'Sugar FreeVanilla', price: '0.70' },
            { name: 'Mocha', price: '0.70' },
            { name: 'Honey Cinnamon', price: '0.70' },
            { name: 'Caramel', price: '0.70' },
            { name: 'Lavendar', price: '0.70' },
            { name: 'Seasonal', price: '0.70' },
            { name: 'Cold Foam', price: '1.50' },
        ]
    }
};

function Menu() {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h1>Our Menu</h1>
                <p>Carefully curated selections of coffee, wine, and small plates</p>
            </div>

            <div className='menu-card'>
                <div className='category-nav'>
                    <button onClick={() => document.getElementById('coffee').scrollIntoView({ behavior: 'smooth' })}>
                        Coffee
                    </button>
                    <button onClick={() => document.getElementById('tea').scrollIntoView({ behavior: 'smooth' })}>
                        Tea
                    </button>
                    <button onClick={() => document.getElementById('additions').scrollIntoView({ behavior: 'smooth' })}>
                        Add-Ons
                    </button>
                    <button onClick={() => document.getElementById('wine').scrollIntoView({ behavior: 'smooth' })}>
                        Wine
                    </button>
                    <button onClick={() => document.getElementById('food').scrollIntoView({ behavior: 'smooth' })}>
                        Food
                    </button>
                </div>

                <section id="coffee" className='menu-section'>
                    <h2>Coffee & Espresso</h2>
                    <div className='menu-items'>
                        {menuData.coffee.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="tea" className='menu-section'>
                    <h2>Tea & Non-Coffee Drinks</h2>
                    <div className='menu-items'>
                        {menuData.tea.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                                {item.description && <p>{item.description}</p>}
                            </div>
                        ))}
                    </div>
                </section>

                <section id="additions" className='menu-section'>
                    <h2>Sizing & Add-Ons</h2>
                    <div className='menu-items'>
                        <div className='menu-item'>
                            <h3>Drink Sizes</h3>
                            <div className='item-header'>
                                <span>Hot:</span>
                                <span>{menuData.additions.sizes.hot.join(' / ')}</span>
                            </div>
                            <div className='item-header'>
                                <span>Iced:</span>
                                <span>{menuData.additions.sizes.iced.join(' / ')}</span>
                            </div>
                        </div>

                        {menuData.additions.milks.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                            </div>
                        ))}

                        {menuData.additions.syrups.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="wine" className='menu-section'>
                    <h2>Wine Selection</h2>
                    <div className='menu-items'>
                        {menuData.wine.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                                <p>Glass / Bottle</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="food" className='menu-section'>
                    <h2>Small Plates & Pastries</h2>
                    <div className='menu-items'>
                        {menuData.food.map((item, index) => (
                            <div className='menu-item' key={index}>
                                <div className='item-header'>
                                    <h3>{item.name}</h3>
                                    <span className='price'>${item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Menu;