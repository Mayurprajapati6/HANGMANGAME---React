import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    // In react return i only return one parent element not nested means if i want to return h1 and h2 then i can't return for this i need to 
    // wrapped both h1 and h2 in div then return div but this is not better way beacuse it creates node in Dom which is not our target our target was only to
    // return h1 and h2 -> so for this 1 concept is come name -> react fragment -> <> return multiple you want </> 
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            <Link to='/play' className="text-blue-400">Play Game Link</Link>

            {/* Your Comments goes here*/ }
            
        </>
    )
}

export default StartGame;