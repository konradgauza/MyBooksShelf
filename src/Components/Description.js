import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";
import firebaseData from "../FirebaseData";
import swal from "sweetalert";

const Description = (props) => {
    const [imageVisible, setImageVisible] = useState(false);
    const [reviewVisible, setReviewVisible] = useState(false);
    const history = useHistory();

    console.log(props.book);

    const showCoverPopup = () => {
        setImageVisible(!imageVisible);
    };

    const showReviewPopup = (e) => {
        e.preventDefault();
        setReviewVisible(!reviewVisible);

    };

    const FullImage = (props) => {
        return (
            <div className="popup">
                <img src={props.image} className="cover-image" alt=" "/>
                <button onClick={() => {setImageVisible(!imageVisible)}}> <i className="fas fa-times cover-close"/> </button>
            </div>
        )
    };

    const FullReview = (props) => {
        return (
            <div className="popup">
                <pre className="book-review"> {props.text} </pre>
                <button onClick={() => {setReviewVisible(!reviewVisible)}}> <i className="fas fa-times cover-close"/> </button>
            </div>
        )
    };


    const deleteBook = (e) => {
        swal({
            className: "swal-alert",
            title: "Are you sure?",
            color: "white",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    firebaseData
                        .firestore()
                        .collection(`Users/${firebaseData.auth().currentUser.uid}/books`)
                        .doc(`${props.book.title}`)
                        .delete();
                    e.preventDefault();
                    history.push("/all")
                } else {
                    swal("That was close...", {
                        className: "swal-alert",
                    });
                }
            })
    };



    return (
        <>
        <div className={"description-container"}>
            <div className={"description-left-side"}>
                <img className={"description-image"} src={props.book.url} alt="book cover" onClick={showCoverPopup}/>
            </div>
            <div className={"description-content"}>
                <div className="description-info">
                    <div className={"title-info"}>
                        <h1> {props.book.title} </h1>
                        <h2> {props.book.ptitle}</h2>
                        <h2> author: {props.book.author} </h2>
                    </div>
                    <p> series: {props.book.series} </p>
                    <p> pages: {props.book.pages} </p>
                    <p> genre: {props.book.genre} </p>
                    <p> progress: {props.book.progress} </p>
                    <p> finished at: {props.book.finished}</p>
                    <pre className={"review"}>{props.book.review}</pre>
                    <div className="review-read-more"><a href="" onClick={showReviewPopup}>read more</a> </div>
                </div>


                <div className={"description-buttons"}>
                    <Link className={"button"} to={props.tab + "edit/" + props.book.title}> Edit info</Link>
                    <a className={"button delete-button"} onClick={deleteBook}> Delete </a>
                </div>
            </div>
        </div>

        {imageVisible ? (
            <FullImage image={props.book.url}/>
        ) : (
            <i/>
        )}

        {reviewVisible ? (
            <FullReview text={props.book.review}/>
        ) : (
            <i/>
        )}

    </>
    )
};

export default Description;