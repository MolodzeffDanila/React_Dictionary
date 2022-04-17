import "../styles/InputTab.css"
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "./NavBar";

function InputTab() {
    const dispatch = useDispatch();
    const [word,setWord] = useState({});
    const [error, setError] = useState('');
    const show = useSelector((state) => {return state});

    const addToFav = (word_item) =>{
        word_item.type = "ADD";
        dispatch(word_item);
    }

    function sendReq(event) {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
            .then(res => res.json())
            .then(
                (result) => {
                    if(Array.isArray(result) === true){
                        let res = {
                            word: result[0].word,
                            phonetic: result[0].phonetic,
                            part_of_the_speech: result[0].meanings[0].partOfSpeech,
                            definition: result[0].meanings[0].definitions[0].definition
                        }
                        setError('');
                        addToFav(res);
                    }else{
                        setError('Wrong word')
                    }
                }
            )
    }


    return (
        <div>
            <NavBar/>
            <div className="main">
                <form>
                    <h3>Введите слово</h3>
                    <input type="text"
                           className="form-control"
                           id="exampleFormControlInput1"
                           placeholder="Введите слово для перевода" onChange={(event) => {
                        setWord(event.target.value)
                    }}/>
                </form>
                <h4>{error}</h4>
                <div className="container result">
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
                    <div className="row">
                        <div className="col">
                            <p id="word">{show.current.word}</p>
                        </div>
                        <div  className="col">
                            <p id="transcription">{show.current.phonetic}</p>
                        </div>
                        <div className="col">
                            <p>{show.current.part_of_the_speech}</p>
                        </div>
                        <div className="col">
                            <p id="definition">{show.current.definition} </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={() => {
                    sendReq()
                }}>Find a word</button>
            </div>
        </div>
    );
}

export default InputTab;