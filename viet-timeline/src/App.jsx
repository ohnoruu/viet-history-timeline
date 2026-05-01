import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Background from './background/Background';
import Timeline from './components/Timeline';
import OverlayImg from '../public/assets/lotus.png';

function App() {
  const [count, setCount] = useState(0)
  const [focused, setFocused] = useState(false);
  const [exitMessage, setExitMessage] = useState("");

  return (
    <>
      {!focused && (
        <div className={`header-section ${focused ? "header-hidden" : ""}  `}>
          <h1>Vietnamese History Timeline</h1>
          <p>Created by Ruby Dao using ReactJS</p>
          <p className="instructions">Use arrow keys or A/D to navigate | Press Space to view descriptions</p>
        </div>
      )}

      { focused && (
        <div className="esc-hint">
          <p>Press ESC to return</p>
          <p>Press SPACE to fast-forward text</p>
          <p>Press A to toggle translations</p>
        </div>
      )}

      <img src={OverlayImg} alt="overlay" className="overlay-img"/>
      
      <Background/>

      <Timeline focused={focused} setFocused={setFocused}/>
    </>
  )
}

export default App
