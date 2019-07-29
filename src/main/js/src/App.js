import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {

  const video = useRef(null);
  const audio = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    if (audio.current) {
      playSound();
    }
  }, [audio.current])

  function myFunction() {
    if (video.current.paused) {
      video.current.play();
      btn.current.innerHTML = "Pause";
    } else {
      video.current.pause();
      btn.current.innerHTML = "Play";
    }
  }

  function playSound() {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }
  return (
    <div className="App">
      <header className="headerstandard">
        <div className="headerstandard-inner">
          <h1>Au Menu</h1>
          <nav className="menu menustandard">
            <a className="target-section1 current" href="#section1">Home</a>
            <a className="target-section2" href="#section2">About</a>
            <a className="target-section3" href="#section3">Portfolio</a>
            <a className="target-section4" href="#section4">The team</a>
            <a className="target-section5" href="#section5">Contact</a>
          </nav>
        </div>
      </header>

      <video autoPlay muted loop ref={video}>
        <source src={require("./media/BlueJoy.mp4")} type="video/mp4" id="myVideo" />
        Your browser does not support HTML5 video.
      </video>

      <div className="content">
        <h1>By BennJ</h1>
        <p>ACDC pour bien démarrer, continuer ou finir la journée.</p>
        <button id="myBtn" ref={btn} onClick={myFunction}>Pause</button>

        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          <audio ref={audio} autoPlay loop
            controls
            src={require("./media/bensound-evolution.mp3")}>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
        </figure>
      </div>
    </div>
  );
}

export default App;
