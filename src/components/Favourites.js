import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import "../styles/InputTab.css"
import NavBar from "./NavBar";

function Favourities() {
    const words = useSelector((state) => {return state});
    const [dictionary,setDict] = useState('')
    const getContent = () => {
        console.log(words)
        return words.favourites.map((item, idx) => {
            return (
                <div key={idx} className="row">
                    <div className="col column_custom2">
                        {item.word}
                    </div>
                    <div className="col column_custom2">
                        {item.phonetic}
                    </div>
                    <div className="col column_custom2">
                        {item.part_of_the_speech}
                    </div>
                    <div className="col column_custom2">
                        {item.definition}
                    </div>
                </div>
            );
        })
    }
    return (
        <div>
            <NavBar/>
            <div className="container result">
                <h2>Saved words</h2>
                <div className="row">
                    <div className="col column_custom">
                        Word
                    </div>
                    <div className="col column_custom">
                        Transcription
                    </div>
                    <div className="col column_custom">
                        Part of the speech
                    </div>
                    <div className="col column_custom">
                        Definiton
                    </div>
                </div>
                <div>{getContent()}</div>
            </div>
        </div>
    );
}

export default Favourities;