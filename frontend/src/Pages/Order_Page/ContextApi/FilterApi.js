import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState(null);

    const UpdateCategory = (NewCategory) => {
        setCategory(NewCategory);
    };

    return (
        <FilterContext.Provider value={{ category, UpdateCategory }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};
