import React from "react";
import BooksListPosition from "./BooksListPosition";
import firebaseData from "../FirebaseData";
import swal from "sweetalert";


const Book = (props) => {

    const deleteBook = (e) => {
        e.preventDefault();
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
                        .delete()
                        .then(() => e.preventDefault());
                } else {
                    swal("That was close...", {
                        className: "swal-alert",
                    });
                }
            })
    };


    return <BooksListPosition book={props.book} tab={props.tab} deleteBook={deleteBook}/>
};

export default Book;

