import React, {useState, useEffect} from "react";
import Description from "./Description";
import firebaseData from "../FirebaseData";

const BookDetails = (props) => {
    const [book, setBook] = useState({});
    const [loaded, setLoaded] = useState(false);
    const tab = "/all/";

    useEffect(() => {
            firebaseData.auth().onAuthStateChanged(user => {
                if (user) {
                    // setBook(props.books.find(book => book.title = props.match.params.title));
                    firebaseData.firestore()
                        .collection(`Users/${firebaseData.auth().currentUser.uid}/books`)
                        .doc(`${props.match.params.title}`)
                        .onSnapshot((querySnapshot) => {
                            const book = querySnapshot.data();
                            setBook(book);
                            setLoaded(true);
                        });
                }
            })
    }, []);


    return (
        <>
            {loaded ? (
                <Description book={book} tab={tab}/>
            ) : (
                <img src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg" alt=""/>
            )}
            
        </>
    )

};


export default BookDetails;
