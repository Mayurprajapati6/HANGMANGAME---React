import { getMaskedString } from "./MaskingUtility";

function MaskedText({text , guessedLetters}) {
    const maskedString = getMaskedString(text , guessedLetters);

    return (
        <>
            {maskedString.map((letter,index) => {
                return (
                    <span key={index} className="mx-1"> {/*margin in x axis 1 tailwaind*/ }
                        {letter}
                    </span>
                )
            })}
        
        </>
    )
}

export default MaskedText;