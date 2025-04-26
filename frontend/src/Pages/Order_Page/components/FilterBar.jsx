import React from 'react';
import FilterOption from './FilterOption';
import '../style/FilterBar.css';
import { useFilterContext } from '../ContextApi/FilterApi';

const FilterBar = ({ options }) => {
    const context = useFilterContext();

    const handleOptionClick = (option) => {
        if(context.category === option)
            context.UpdateCategory(null);
        else
        context.UpdateCategory(option); 
    };

    return (
        <div className="filter-bar">
            {options.map(option => (
                <FilterOption
                    key={option}
                    text={option}
                    onClick={handleOptionClick}
                />
            ))}
        </div>
    );
};

export default FilterBar;
