import { Link, useLocation, useParams } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {

    {/*const params = useSearchParams(); // it will give us an array from the this array we destructure searchParams */}

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    //const { text , id} = useParams();

    const { state } = useLocation();


    return(
        <>
            {/*<h1>Play Game{text} {id}</h1> */}
            <h1>Play Game {state.wordSelected}</h1>

            <MaskedText text={state.wordSelected} guessedLetters={[]} />

            <Link to='/start' className="text-green-400">Start Game Link</Link>
        </>
    );
}

export default PlayGame;