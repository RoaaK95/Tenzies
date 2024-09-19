import { useState } from 'react'
import Die from '../Die'
 

function App() {
  
  const [dice,setDice]= useState(allNewDice())
   function allNewDice()
    {
      const newDice=[];
      for(let i = 0; i < 10; i++)
      {
       newDice.push(Math.ceil(Math.random()*6) )
      }
      return newDice;
    }
   
    const diceElements=dice.map(die => <Die value={die}/>)

    const rollDice = (()=> setDice(allNewDice()))
  return (
    <main>
      <div className='dice-container'>
      {diceElements}
       </div>
      <button
      className='roll-dice'
      onClick={rollDice}
      >Roll
      </button>
    </main>
  )
}

export default App
