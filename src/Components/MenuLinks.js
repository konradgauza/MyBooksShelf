import React, {useState} from "react";
import {Link} from "react-router-dom";

const MenuLink = (props) => {
    const reload = () => {
        if(window.location.href === `http://localhost:3001` + props.url) {
            window.location.reload();
        }
    };

    return <li className={props.clicked ? "li-style-mobile-covered" : "li-style"}><Link exact to={props.url} onClick={() => {reload(); props.menuToggle()}}> {props.text} </Link></li>
};


const MenuLinks = (props) => {
    const [clicked, setClicked] = useState("false");

    const menuToggle = () => {
        setClicked(!clicked)
    };



    const menuItems = [
        {
            name: "All Books",
            url: "/all",
            id: 1
        },
        {
            name: "Read",
            url: "/read",
            id: 2
        },
        {
            name: "To Read",
            url: "/toRead",
            id: 3
        },
        {
            name: "Waiting for Premiere",
            url: "/waitingForPremiere",
            id: 4
        },
        {
            name: "ADD BOOK",
            url: "/form",
            id: 5
        }
        ];

    return (
        <>
                <div id="menu-toggle" onClick={menuToggle} className={clicked ? null : "open"}>
                    <div id="hamburger">
                        <span className={"menu-line"}> </span>
                        <span className={"menu-line"}> </span>
                        <span className={"menu-line"}> </span>
                    </div>
                    <div id="cross">
                        <span className={"menu-line"}> </span>
                        <span className={"menu-line"}> </span>
                    </div>
                </div>
                <nav>
                    <ul className={clicked ? "ul-style-mobile-covered" : "ul-style"}>
                        {menuItems.map((item) => {
                            return <MenuLink clicked={clicked} menuToggle={menuToggle} key={item.id} text={item.name} url={item.url}/>
                        })}
                        <li className={clicked ? "li-style-mobile-covered" : "li-style"} onClick={props.handleLogout}><a
                            href=""> LOG OUT </a></li>
                    </ul>
                </nav>
        </>
    );
};

export default MenuLinks;
