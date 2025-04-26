import React from "react";
import CardWithData from "./components/CardWithData";
// import Header from "./components/HeaderOrder";
import FilterBar from "./components/FilterBar";
import { OrderProvider } from "../Cart_Page/contextAPI/OrderCartContext";

const Order_Page =()=>{

    const options =['cake','snack','dessert']
    
    return(
        <>
            {/* <Header/> */}
            <FilterBar options={options}/>
            <CardWithData/>
        </>
    )
}

export default Order_Page ;