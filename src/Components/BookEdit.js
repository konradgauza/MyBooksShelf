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


































// const BookEdit = (props) => {
//
//     const [book, setBook] = useState({});
//
//     useEffect(() => {
//         fetch('http://localhost:3000/books/'+props.match.params.id)
//             .then(response => response.json())
//             .then((item) => {
//                     setBook(item);
//             });
//     }, []);
//
//     const newBook = {
//         title: book.title,
//         ptitle: book.ptitle,
//         series: book.series,
//         author: book.author,
//         pages: book.pages,
//         genre: book.genre,
//         progress: book.progress,
//         finished: book.finished,
//         review: book.review,
//         url: book.url
//     };
//
//     console.log(newBook);
//
//     const editBook = () => {
//         return fetch('http://localhost:3000/books/' + props.match.params.id, {
//             method: "PATCH",
//             body: JSON.stringify(newBook),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then((response) => response.json());
//
//     };
//
//     return (
//         <div className={"form"}>
//             <form style={{width: 800, margin: "0 auto", alignItems: "center", textAlign: "center"}}>
//
//                 <div style={{display:"flex", justifyContent: "space-evenly"}}>
//                     <div style={{display:"flex", flexDirection: "column"}}>
//
//                         <label htmlFor="title"> Title: </label>
//                         <input type="text" id="title" name="title" value={book.title} onChange={(e) => setBook({title: e.target.value})}/>
//                         <label htmlFor="ptitle"> Polish title: </label>
//                         <input type="text" id="ptitle" name="ptitle" value={book.ptitle} onChange={(e) => setBook({ptitle: e.target.value})}/>
//                         <label htmlFor="series"> Book series: </label>
//                         <input type="text" id="series" name="series" value={book.series} onChange={(e) => setBook({series: e.target.value})}/>
//                         <label htmlFor="author"> Author: </label>
//                         <input type="text" id="author" name="author" value={book.author} onChange={(e) => setBook({author: e.target.value})}/>
//                         <label htmlFor="pages"> Number of pages: </label>
//                         <input type="text" id="pages" name="pages" value={book.pages} onChange={(e) => setBook({pages: e.target.value})}/>
//                         <label htmlFor="url"> Url: </label>
//                         <input type="text" id="url" name="url" value={book.url} onChange={(e) => setBook({url: e.target.value})}/>
//
//                     </div>
//                     <div style={{display:"flex", flexDirection: "column"}}>
//                         <label htmlFor="genre"> Genre: </label>
//                         <select name="genre" id="genre" value={book.genre} onChange={e => setBook({genre: e.target.value})}>
//                             <option value="Fantasy">Fantasy</option>
//                             <option value="SF">SF</option>
//                             <option value="Criminal">Criminal</option>
//                             <option value="Travel">Travel</option>
//                         </select>
//                         <label htmlFor="genre"> Progress: </label>
//                         <select name="progress" id="progress" value={book.progress} onChange={(e) => setBook({progress: e.target.value})}>
//                             <option value="--"> -- </option>
//                             <option value="Read">Read</option>
//                             <option value="To read">To read</option>
//                             <option value="Waiting for premiere">Waiting for premiere</option>
//                         </select>
//                         <label className="container">
//                             <input type="checkbox"/> Owned
//                             {/*<span className="checkmark"></span>*/}
//                         </label>
//                         <label htmlFor="finish"> Finished (date): </label>
//                         <input type="text" id="finish" name="finish" value={book.finished} onChange={(e) => setBook({finished: e.target.value})}/>
//                         <label htmlFor="review"> Review: </label>
//                         <textarea  id="review" name="review" rows="4" cols="50" value={book.review} onChange={(e) => setBook({review: e.target.value})}/>
//                         <Link to={"/all/" + props.match.params.id} onClick={editBook}> Save changes </Link>
//
//                     </div>
//                 </div>
//                 <h3 style={{display: "none"}}> Title and author need to have min 2 characters. Please check the fields </h3>
//             </form>
//         </div>
//     )
// };
//
// export default BookEdit;


