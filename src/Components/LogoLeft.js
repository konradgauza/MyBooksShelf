import React from "react";
import {Link} from "react-router-dom";

const LogoLeft = () => {
    return (
        <Link exact to="/">
            <div id={"logo"} className={"logo2"}><p className={"text"}> bookshelf </p></div>
            <p id={"text2"} className={"text2"}> My </p>
        </Link>
    )
};

export default LogoLeft;