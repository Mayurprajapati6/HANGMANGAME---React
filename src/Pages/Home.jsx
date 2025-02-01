import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContext";

function Home() {

    {/*const [word, setWord] = useState('');*/ }
    const {  setWordList , setWord} = useContext(WordContext);

    async function fetchWords(params) {
        const response = await fetch('http://localhost:3000/Words');
        const data = await response.json();
        console.log(data);

        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    },[]);

    return (
        <>
            {/* Link to='/play' state={{wordSelected: "mango"}}* */}
            <Link to='/play'  > {/*state={{wordSelected: word}}* */}
                <Button text="Single Player" />
            </Link>

            <br />

            <Link to="/start" >
                <div className="mt-4">
                    <Button text="Multi Player" styleType="secondary"/>
                </div>
            </Link>
        
        </>
    )
}

export default Home;