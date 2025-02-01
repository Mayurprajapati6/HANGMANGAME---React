import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayGame from './Pages/PlayGame'
import StartGame from './Pages/StartGame'
import Home from './Pages/Home'
import { WordContext } from './context/WordContext'
import { useState } from 'react'

{/**  //import Button from './components/Button/Button'
      //import TextInput from './components/TextInput/TestInput' 
*/}

{ /*import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer' */}

function App() {
  
  const [wordList , setWordList] = useState();
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider value={{ wordList , setWordList , word , setWord}}>
      <Routes>
        <Route path='/start' element={<StartGame />}/>
        {/*<Route path='/play/:text/:id' element={<PlayGame />}/> */}
        <Route path='/play' element={<PlayGame />}/>
      
        {/* <Route path='/' element={<div>Home</div>} /> */ }

        <Route path='/' element={<Home />} />
      </Routes>
    </WordContext.Provider>
    
  )
}

export default App
