import React, {useState, useEffect} from "react";
import Book from "./Book";
import Search from "./Search";
import LogoLeft from "./LogoLeft";

const AllBooks = (props) => {

    const tab = "/all/";
    const { books } = props;


    return (
        <>
            <LogoLeft/>
            <div className={"main-container"}>
                <Search books={books} tab={tab}/>
                <div className={"containerx hide"}>
                    <div className={"all-books"}>
                        {books.map((book, index) => {
                            return <Book key={index} book={book} tab={tab}/>
                            })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default AllBooks;