import { Link, useLocation, useParams } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HANGMAN/HangMan";

function PlayGame() {

    {/*const params = useSearchParams(); // it will give us an array from the this array we destructure searchParams */}

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    //const { text , id} = useParams();

    const { state } = useLocation();

    const [guessedLetters , setGuessedLetters] = useState([]);

    const [step,setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state?.wordSelected?.toUpperCase().includes(letter)) {
            console.log("Correct");
        }else {
            console.log("Wrong");
            setStep(step+1);

        }

        setGuessedLetters([...guessedLetters , letter]);
    }


    return(
        <>
            {/*<h1>Play Game{text} {id}</h1> */}
            <h1>Play Game </h1> {/*{state.wordSelected}*/ }

            {state?.wordSelected && (
                <> 
                    <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />

                <div>
                    <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                </div>

                <div>
                    <HangMan step={step} />
                </div>
                
                </>
            )}

            <Link to='/'>Home</Link>
            <Link to='/start' className="text-green-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;