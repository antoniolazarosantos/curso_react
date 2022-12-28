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


function App() {
  const [gameStage,setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  console.log(words);

  return (
    <div className="App">
      {gameStage === stages[START].name && <StartScreen/> }
      {gameStage === stages[GAME].name && <Game /> }
      {gameStage === stages[END].name && <GameOver/> }
    </div>
  );
}

export default App;
