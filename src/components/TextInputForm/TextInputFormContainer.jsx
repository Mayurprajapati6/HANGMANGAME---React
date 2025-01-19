import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType , setInputType] = useState("password");
    const [value , setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function{object}

    function handlerFormSubmit(event) {
        event.preventDefault();
        console.log("Form Submited",value);
        if(value) {
            // if we have something is value then we want to go to the play page
            // navigate(`/play?text=${value}`); -> 1st way
            // navigate(`/play/${value}/2`); -> 2nd way
            navigate(`/play`,{ state: {wordSelected: value}});
        }
    }

    function handlerTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked")
        if(inputType === "password") {
            setInputType("text");
        }else {
            setInputType("password");
        }
    }

    return (
        <TextInputForm
            inputType={inputType}
            handlerFormSubmit={handlerFormSubmit}
            handlerTextInputChange={handlerTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;