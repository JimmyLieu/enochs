import React from 'react';
import './TeamMember.css';


import ownerImage from '../assets/Barista.png';  
import wineDirectorImage from '../assets/Barista.png';
import baristaImage from '../assets/Barista.png';


const teamImages = {
    owner: ownerImage,
    wineDirector: wineDirectorImage,
    barista: baristaImage
};

function TeamMember({ name, role, imageKey }) {
    return (
        <div className="team-member">
            <div className="member-image">
                <img src={teamImages[imageKey]} alt={name} />
            </div>
            <div className="member-info">
                <h3>{name}</h3>
                <p className="role">{role}</p>
            </div>
        </div>
    );
}

export default TeamMember; 