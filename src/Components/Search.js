import React, {useState} from 'react';
import Book from "./Book";

const Search = (props) => {

    const [title, setTitle] = useState('');
    const [ptitle, setPtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const { books } = props;

    const searchByTitle = () => {
        setFilteredBooks(books.filter(book => book.title.toUpperCase().includes(title.toUpperCase())));
        document.querySelector(".show").style.display = "flex";
        document.querySelector(".hide").style.display = "none";
    };

    const searchByPtitle = () => {
        setFilteredBooks(books.filter(book => book.ptitle.toUpperCase().includes(ptitle.toUpperCase())));
        document.querySelector(".show").style.display = "flex";
        document.querySelector(".hide").style.display = "none";
    };

    const searchByAuthor = () => {
        setFilteredBooks(books.filter(book => book.author.toUpperCase().includes(author.toUpperCase())));
        document.querySelector(".show").style.display = "flex";
        document.querySelector(".hide").style.display = "none";
    };

    return (
        <>
            <div className={"searchDiv"}>
                <input className={"search"} type="text" placeholder="Search by title" value={title} onChange={e => setTitle(e.target.value)} onKeyUp={searchByTitle}/>
                <input className={"search"} type="text" placeholder="Search by polish title" value={ptitle} onChange={e => setPtitle(e.target.value)} onKeyUp={searchByPtitle}/>
                <input className={"search"} type="text" placeholder="Search by author" value={author} onChange={e => setAuthor(e.target.value)} onKeyUp={searchByAuthor}/>
            </div>
            <div className={"containerx show"}>
                <div className={"all-books"}>
                    {filteredBooks.map((book, index) => {
                        return <Book key={index} book={book} tab={props.tab}/>
                    })}
                </div>
            </div>
        </>
    )

};

export default Search;




















// const searchByPTitle = (event) => {
//     if(event.keyCode === 13) {
//         fetch(`http://localhost:3000/${props.filler}?ptitle_like=${phrase2}`)
//             .then(response => response.json())
//             .then((books) => {
//                 setFilteredBooks(books)
//             });
//         document.querySelector(".show").style.display = "flex";
//         document.querySelector(".hide").style.display = "none";
//         setPhrase2("")
//     }
// };