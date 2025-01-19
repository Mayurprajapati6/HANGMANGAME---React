import TextInput from "../TextInput/TestInput";
import Button from "../Button/Button";

function TextInputForm({inputType , handlerFormSubmit,handlerTextInputChange , handleShowHideClick}) {

    

    return(

        <form onSubmit={handlerFormSubmit}>

            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or phrases here ..."
                    onChangeHandler={handlerTextInputChange}
                />
            </div>

            <div>
                <Button 
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button 
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>

        </form>

    );

}

export default TextInputForm