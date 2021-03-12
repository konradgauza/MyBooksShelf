import React from "react";
import {Link, useHistory} from "react-router-dom";

const LogoHome = () => {
    // const history = useHistory();

    const reload = () => {
        window.location.reload();
        // history.push("/");
    };

    return (
        <div id={"logo-container"} className={"logo-container-home"}>
            <div id={"logo-handler"} className={"logo-handler-home"}>
                <Link exact to="/" onClick={reload}>
                    <div id={"logo"} className={"logo2-home"}><p className={"text-home"}> book's shelf </p></div>
                    <p id={"text2"} className={"text2-home"}> My </p>
                </Link>
            </div>
        </div>
    )
};

export default LogoHome;