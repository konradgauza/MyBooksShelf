import React from "react";
import Typist from "react-typist";

const RandomQuote = () => {
    const quotes = [
        {
            quote: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.",
            author: "Charles W. Eliot"
        },
        {
            quote: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
            author: "Carl Sagan"
        },
        {
            quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
            author: "Neil Gaiman"
        },
        {
            quote: "Szczęście i Bogowie osobiście zawsze sprzyjają tym, którzy są bezczelni, zaradni i na nikogo nie czekają. Chcesz mieć szczęście i Bogów stojących po swojej stronie? To natychmiast zrób coś dla samej siebie. I jak ci się już uda, to zawsze się okaże, że Bogowie akurat bardzo ci sprzyjają.",
            author: "Andrzej Ziemiański"
        },
        {
            quote: "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",
            author: "William Styron"
        },
        {
            quote: "I love books. I adore everything about them. I love the feel of the pages on my fingertips. They are light enough to carry, yet so heavy with worlds and ideas. I love the sound of the pages flicking against my fingers. Print against fingerprints. Books make people quiet, yet they are so loud.",
            author: "Nnedi Okorafor"
        },
        {
            quote: "In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.",
            author: "Mortimer J. Adler"
        },
        {
            quote: "Children know perfectly well that unicorns aren’t real, but they also know that books about unicorns, if they are good books, are true books.",
            author: "Ursula K. LeGuin"
        },
        {
            quote: "Of course anyone who truly loves books buys more of them than he or she can hope to read in one fleeting lifetime. A good book, resting unopened in its slot on a shelf, full of majestic potentiality, is the most comforting sort of intellectual wallpaper.",
            author: "David Quammen"
        },
        {
            quote: "Reading is an act of civilization; it’s one of the greatest acts of civilization because it takes the free raw material of the mind and builds castles of possibilities.",
            author: "Ben Okri"
        }
    ];

    let sentence = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className={"sentence-container"}>
            <Typist>
                <span className="sentence"> {sentence.quote} </span>
                <br/>
                <span className="author"> - {sentence.author} </span>
            </Typist>
        </div>
    )
};

export default RandomQuote;
