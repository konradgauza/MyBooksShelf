import React from 'react';
import {Link} from "react-router-dom";

const BooksListPosition = (props) => {

    return (
        <div className={"position"}>
            <Link to={props.tab + props.book.title}><img src={props.book.url} alt={props.book.url} className={"small-cover"}/></Link>
            <div className={"position-content"}>
                <h2 className={"title"}>{props.book.title}</h2>
                <h3 className={"author"}>author: {props.book.author}</h3>
                <Link to={props.tab + props.book.title} className={"position-read-more-button"}> Read more </Link>
                <div className={"position-change-buttons"}>
                    <Link to={props.tab + "edit/" + props.book.title}> Edit info </Link>
                    <a href="" className={"position-delete-button"} onClick={props.deleteBook}> Delete </a>
                </div>
            </div>
        </div>
    )
};

export default BooksListPosition;
