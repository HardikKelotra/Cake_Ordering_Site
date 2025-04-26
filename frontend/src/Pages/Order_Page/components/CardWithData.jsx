import React, { useEffect, useState } from 'react';
import Card from './Card'; 
import '../style/CardWithData.css';
import { useFilterContext } from '../ContextApi/FilterApi';
import { useOrderContext } from '../../Cart_Page/contextAPI/OrderCartContext';

const CardWithData = () => {
    const [fullData, setFullData] = useState([]); 
    const [data, setData] = useState([]); 
    const context = useFilterContext();
    const {setMenu} = useOrderContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/Menu");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setMenu(result);

                setFullData(Array.isArray(result) ? result : []); 
                setData(Array.isArray(result) ? result : []); 
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [setMenu]); 

    useEffect(() => {
        if (context.category) {
            const filteredData = fullData.filter(item => item.category === context.category);
            setData(filteredData);
        } else {
            setData(fullData); 
        }
    }, [context.category, fullData]); 

    return (
        <div className="cards-container">
            {data.length === 0 ? (
                <p>Loading data...</p>
            ) : (
                data.map((item) => (
                    <Card
                        key={item.id} 
                        name={item.item}
                        price={item.price}
                        description={item.discription}
                    />
                ))
            )}
        </div>
    );
};

export default CardWithData;

