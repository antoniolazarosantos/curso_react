//Css
import './App.css';

//React
import {useCallback, useEffect, useState} from "react";

//Dados
import {wordsList} from "./data/words";

// Componentes
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const START = 0;
const GAME = 1;
const END = 2;
const stages = [
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"},
];

const MAXIMO_DE_TENTATIVAS = 3;
const PESO = 100;


function App() {
  const [gameStage,setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord,setPickedWord] = useState("");
  const [pickedCategory,setPickedCategory] = useState("");
  const [letters,setLetters] = useState([]);
  // Letras advinhadas
  const [guessedLetters,setGuessedLetters] = useState([]);
   // Letras erradas
   const [wrongLetters,setWrongLetters] = useState([]);
   // Tentativas do usuário
   const [guesses,setGuesses] = useState(MAXIMO_DE_TENTATIVAS);
   // Pontuação
   const [score,setScore] = useState(0);
  
  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() * Object.keys(words[category]).length)];

    return {word, category};

  }

  const startGame = () => {
    const {word, category} = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);


    setgameStage(stages[GAME].name);
  };

  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();
    if ( (guessedLetters.includes(normalizedLetter)) ||
         (wrongLetters.includes(normalizedLetter))){
          return;
    }

    if (letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters,normalizedLetter]);
      setScore((p) => (p + 1 ) * PESO)
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters,normalizedLetter]);
      setGuesses((actualGuesses) => actualGuesses -1);
    }   

  }

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]); 
  }

  useEffect(() => {

    if (guesses <= 0){
      clearLettersStates();
      setgameStage(stages[END].name);
    }

  },[guesses])
  
  const retry = () => {
    setGuesses(MAXIMO_DE_TENTATIVAS);
    setScore(0);
    setgameStage(stages[START].name);
  }

  return (
    <div className="App">
      {gameStage === stages[START].name && <StartScreen startGame={startGame}/> }
      {gameStage === stages[GAME].name && 
      <Game verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
       pickedCategory={pickedCategory}
       letters={letters}
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses}
       score={score}
       /> }

      {gameStage === stages[END].name && <GameOver retry={retry} score={score}/>  }
    </div>
  );
}

export default App;
