import { useState } from 'react';
import './App.css';
import Score from './components/score';
import Map from './components/mapdemo';

function App() {
   const[score ,setScore] = useState(0)
  return (
    <div className="App">
      <h1 className='header'>Score Board</h1>
      <Score runs={score}/>
      <p className='para'>* Click on to update score</p>
      <button className='btn1' onClick={()=>setScore(score+1)}>one</button>
      <button className='btn2' onClick={()=>setScore(score+2)}>two</button>
      <button className='btn3' onClick={()=>setScore(score+4)}>four</button>
      <button className='btn4' onClick={()=>setScore(score+6)}>six</button>
      <Map/>
    </div>
  );
}

export default App;
