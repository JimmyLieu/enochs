import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>Our Story</h1>
                <p>From vineyard to coffee house, a journey of family, community, and craft.</p>
            </section>

            <section className="about-content">
                <div className="about-section">
                    <h2>Our Origins</h2>
                    <p>Enoch's Wine & Coffee House Tyler was born out of Enoch's Stomp Vineyard & Winery, 
                    located twenty minutes away in Harleton, Texas.</p>
                </div>

                <div className="about-section">
                    <h2>Our Beginning</h2>
                    <p>In 2004, an extraordinary partnership was formed when two families - one from 
                    South Africa and one from the Pacific Northwest - came together with a shared vision. 
                    Together, they transformed a horse ranch into what would become the beautiful 
                    Enoch's Stomp Vineyard & Winery.</p>
                </div>

                <div className="about-section">
                    <h2>Our Growth</h2>
                    <p>The journey of expansion began in 2019 when we opened our first Enoch's Wine & 
                    Coffee House in the historic town of Jefferson, Texas. Driven by the desire to 
                    share our wines with more communities across the state, the families of Enoch's 
                    Stomp embarked on a new chapter with the creation of Enoch's Wine & Coffee House Tyler.</p>
                </div>

                <div className="about-section">
                    <h2>Our Experience</h2>
                    <p>At Enoch's Wine & Coffee House Tyler, we bring together the best of both worlds: 
                    expertly crafted wines from our own vineyard and carefully selected coffee offerings. 
                    Our unique heritage and commitment to quality create an atmosphere where wine 
                    enthusiasts and coffee lovers alike can find their perfect drink.</p>
                </div>
            </section>

            <section className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    {/* Add team member components here if desired */}
                </div>
            </section>
        </div>
    );
}

export default About; 