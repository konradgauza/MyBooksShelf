import React, {useState} from "react";
import FormBody from "./FormBody";
import {Link} from "react-router-dom";
import firebaseData from "../FirebaseData";

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [ptitle, setPtitle] = useState("");
    const [series, setSeries] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [genre, setGenre] = useState("");
    const [progress, setProgress] = useState("");
    const [finished, setFinished] = useState("");
    const [review, setReview] = useState("");
    const [url, setUrl] = useState("");

    const { books } = props;

    const newBook = {
        title: title,
        ptitle: ptitle,
        series: series,
        author: author,
        pages: pages,
        genre: genre,
        progress: progress,
        finished: finished,
        review: review,
        url: url
    };


    const addBook = (e) => {
        if(newBook.title.length > 2 && newBook.author.length > 2) {
            document.querySelector("h3").style.display="none";

            const getBooks = () => {
                    const filtered = books.filter(book => book.title === title);
                    if( filtered.length === 0) {
                        firebaseData.firestore()
                            .collection(`Users/${firebaseData.auth().currentUser.uid}/books`)
                            .doc(title)
                            .set(newBook)
                            .then(() => window.location.reload());
                    } else {
                        document.querySelector(".already-exist").style.display="block";
                    }
            };
            getBooks();
        } else {
            e.preventDefault();
            document.querySelector(".already-exist").style.display="none";
            document.querySelector(".form-warning").style.display="block";
        }
    };


    return (
        <div >
             <div id={"logo-container"} className={"logo-container"}>
                 <div id={"logo-handler"} className={"logo-handler"}>
                    <Link exact to="/">
                        <div id={"logo"} className={"logo2-center"}><p className={"text"}> book's shelf </p></div>
                        <p id={"text2"} className={"text2-center"}> My </p>
                    </Link>
                </div>
            </div>
            <form className={"form"}>
                <FormBody
                    title={title}
                    ptitle={ptitle}
                    series={series}
                    author={author}
                    pages={pages}
                    genre={genre}
                    progress={progress}
                    finished={finished}
                    review={review}
                    url={url}
                    setTitle={setTitle}
                    setPtitle={setPtitle}
                    setSeries={setSeries}
                    setAuthor={setAuthor}
                    setPages={setPages}
                    setGenre={setGenre}
                    setProgress={setProgress}
                    setFinished={setFinished}
                    setReview={setReview}
                    setUrl={setUrl}
                />
                <a className={"form-button"} onClick={addBook}><strong> Add to collection </strong></a>
                <h3 className={"form-warning"}> Title and author need to have at least 2 characters. Please check the fields </h3>
                <h3 className={"already-exist"}> Book with this title already exist in your collection </h3>
            </form>
        </div>
    )

};

export default Form;
































// const secondAdd = () => {
//     if (progress === "--") {
//         return null;
//     } else {
//         fetch(`http://localhost:3000/${progress}?title=${title}`,)
//             .then((response) => response.json())
//             .then(result => {if( result.length === 0) {
//         return fetch(`http://localhost:3000/${progress}`, {
//             method: 'POST',
//             body: JSON.stringify(newBook),
//             headers: {
//                 'Content-Type': 'application/json',
//             },})
//             .then((response) => response.json())
//             .then(newBook => {
//                 console.log(newBook);
//             })}})}
// };
//
//
// const mergedEvents = (e) => {
//     if(newBook.title.length > 2 && newBook.author.length > 2) {
//         document.querySelector("h3").style.display="none";
//         addBook();
//         secondAdd();
//         location.reload()
//     } else {
//         e.preventDefault();
//         document.querySelector("h3").style.display="block"
//     }
// };