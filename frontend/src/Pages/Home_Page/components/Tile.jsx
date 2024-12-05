import React from 'react';
import '../style/Tile.css';

const Tile = ({ title, icon }) => {
    return (
        <div className="tile">
            <img src={icon} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Tile;
