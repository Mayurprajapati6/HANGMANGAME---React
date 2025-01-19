// function Button(props) {
//     return(
//         <button>
//             {props.text}
//         </button>
//     )
// }

//import './Button.css'

import getButtonStyling  from "./getButtonStyling";

function Button({ text , onClickHandler , styleType="primary" , type="button" }) {
    //console.log(text);

    return (
        <button
            onClick={onClickHandler}
            type={type}
            //style={{backgroundColor:"blue"}}
            //className="btn" -> CSS
            //className="text-white bg-blue-500" // tailwaind - css
            className={`px-4 py-2 ${getButtonStyling(styleType)} bg-blue-500`}   // px-[17px] custom css in tailwaind
        >
            {text}
        </button>
    )
}


export default Button;