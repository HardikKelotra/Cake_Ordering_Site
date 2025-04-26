import React from 'react';
import Tile from './Tile';
import '../style/TileSection.css';
import Wedding_Cake from '../Images_Home/Wedding_Cake.png'
import indian_dessert from '../Images_Home/Indian_dessert(1).png'
import indian_snack from '../Images_Home/Indian_Snack.png'
import Birthday_cake from '../Images_Home/Birthday_Cake.png'
import Graduation_Cake from '../Images_Home/Graduation_Cake.png'

const TileSection = () => {
    const tiles = [
        { id: 1, title: 'Wedding Cakes', icon: Wedding_Cake },
        { id: 2, title: 'Indian Desserts', icon: indian_dessert },
        { id: 3, title: 'Indian Snacks', icon: indian_snack },
        { id: 4, title: 'Birthday Cakes', icon: Birthday_cake },
        { id: 5, title: 'Graduation Cakes', icon: Graduation_Cake }
    ];

    return (
        <section className="tile-section">
            {tiles.map(tile => (
                <Tile key={tile.id} title={tile.title} icon={tile.icon} />
            ))}
        </section>
    );
};

export default TileSection;
