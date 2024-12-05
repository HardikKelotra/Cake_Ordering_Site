import React from 'react';
import '../style/FilterOption.css';
import { useFilterContext } from '../ContextApi/FilterApi';

const FilterOption = ({ text, onClick }) => {
    const context = useFilterContext();
    return (
        <div
            className={`filter-option ${context.category === text ? 'selected' : ''}`} // Corrected condition
            onClick={() => onClick(text)}
        >
            {text}
        </div>
    );
};

export default FilterOption;
