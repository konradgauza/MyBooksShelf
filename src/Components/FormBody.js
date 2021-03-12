import React from "react";

const FormBody= (props) => {
    return(
        <>
            <div className={"inputs-container"}>

                <input className={"form-input"} type="text" id="title" name="title" placeholder={"Title"} value={props.title} onChange={(e) => props.setTitle(e.target.value)}/>
                <input className={"form-input"} type="text" id="ptitle" name="ptitle" placeholder={"Polish title"} value={props.ptitle} onChange={(e) => props.setPtitle(e.target.value)}/>
                <input className={"form-input"} type="text" id="series" name="series" placeholder={"Book series"} value={props.series} onChange={(e) => props.setSeries(e.target.value)}/>
                <input className={"form-input"} type="text" id="author" name="author" placeholder={"Author"} value={props.author} onChange={(e) => props.setAuthor(e.target.value)}/>
                <input className={"form-input"} type="text" id="pages" name="pages" placeholder={"Number of pages"} value={props.pages} onChange={(e) => props.setPages(e.target.value)}/>
            </div>
            <div className={"form-text-container"}>
                <div></div>
                <textarea className={"form-text-area"} id="review" name="review" rows="4" cols="50" placeholder={"Review"} value={props.review} onChange={(e) => props.setReview(e.target.value)}/>
            </div>
            <div className={"inputs-container"}>
                <select className={"form-select-field"} name="genre" id="genre" value={props.genre} onChange={(e) => props.setGenre(e.target.value)}>
                    <option value="--"> -- </option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="SF">SF</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Travel">Travel</option>
                </select>
                <select className={"form-select-field"} name="progress" id="progress" value={props.progress} onChange={(e) => props.setProgress(e.target.value)}>
                    <option value="--"> -- </option>
                    <option value="read">Read</option>
                    <option value="toRead">To read</option>
                    <option value="waitingForPremiere">Waiting for premiere</option>
                </select>
                <input className={"form-input"} type="text" id="finish" name="finish" placeholder={"Finished reading date"} value={props.finished} onChange={(e) => props.setFinished(e.target.value)}/>
                <input className={"form-input"} type="text" id="url" name="url" placeholder={"cover img url"} value={props.url} onChange={(e) => props.setUrl(e.target.value)}/>


            </div>
        </>
    )
};

export default FormBody;