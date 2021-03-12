import React, {useState, useEffect} from "react";
import Book from "./Book";
import Search from "./Search";
import LogoLeft from "./LogoLeft";

const WaitingForPremiere = (props) => {

    const tab = "/waitingForPremiere/";
    const { books } = props;
    const filtered = books.filter(book => book.progress === "waitingForPremiere");


    return (
        <>
            <LogoLeft/>
            <div className={"main-container"}>
                <Search books={filtered}/>
                <div className={"containerx hide"}>
                    <div className={"all-books"}>
                        {filtered.map((book) => {
                            return <Book key={book.id} book={book} tab={tab}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default WaitingForPremiere;
