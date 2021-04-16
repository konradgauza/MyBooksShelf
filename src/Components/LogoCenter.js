import React from "react";
import {Link} from "react-router-dom";

const LogoCenter = () => {
    return (
        <div id={"logo-container"} className={"logo-container"}>
            <div id={"logo-handler"} className={"logo-handler"}>
                <Link exact to="/">
                    <div id={"logo"} className={"logo2-center"}><p className={"text"}> bookshelf </p></div>
                    <p id={"text2"} className={"text2-center"}> My </p>
                </Link>
            </div>
        </div>
    )
};

export default LogoCenter;