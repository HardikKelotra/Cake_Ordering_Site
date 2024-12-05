import React from "react";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import TileSection from "./components/TileSection";
import About from "./components/About";

const Home_Page  =()=>{
    return(
        <>
            {/* <Header/> */}
            <Hero/>
            <TileSection/>
            <About/>
        </>
    )
}

export default Home_Page ;