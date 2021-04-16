import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FormBody from "./FormBody";
import LogoCenter from "./LogoCenter";
import firebaseData from "../FirebaseData";


const BookEdit = (props) => {
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        firebaseData.auth().onAuthStateChanged(user => {
            if(user) {
                firebaseData.firestore()
                    .collection(`Users/${firebaseData.auth().currentUser.uid}/books`)
                    .doc(`${props.match.params.title}`)
                    .onSnapshot((querySnapshot) => {
                        const book = querySnapshot.data();
                        setTitle(book.title);
                        setAuthor(book.author);
                        setPtitle(book.ptitle);
                        setSeries(book.series);
                        setPages(book.pages);
                        setGenre(book.genre);
                        setProgress(book.progress);
                        setFinished(book.finished);
                        setReview(book.review);
                        setUrl(book.url);
                        setLoaded(true);
                    });
            }
        })
    }, []);


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

    const editBook = (e) => {

        if(newBook.title.length > 2 && newBook.author.length > 2) {
            document.querySelector("h3").style.display="none";
            firebaseData.firestore()
                .collection(`Users/${firebaseData.auth().currentUser.uid}/books`)
                .doc(title)
                .set(newBook)
                .then(() => {
                    console.log("cool");
                });
        } else {
            e.preventDefault();
            document.querySelector(".form-warning").style.display="block";
        }

    };

    return (
            <>
                {loaded ? (
                        <div >
                            <LogoCenter/>
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
                                    review={review} url={url}
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
                                <Link className={"form-button"} to={"/all/" + props.match.params.title} onClick={editBook}> Save changes </Link>
                                <h3 style={{display: "none"}}> Title and author need to have min 2 characters. Please check the fields </h3>
                            </form>
                        </div>
                    ) : (
                        <img src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg" alt=""/>
                    )}
            </>
    )
};

export default BookEdit;