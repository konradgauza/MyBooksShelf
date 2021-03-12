import React from 'react';
import LogoHome from "./LogoHome"
import RandomQuote from "./RandomQuote";

const Home = () => {
    return (
        <div className={"home"}>
            <LogoHome/>
            <RandomQuote/>
        </div>
    )
};

export default Home;