import './App.css'
import React from 'react'
import background from './assets/bg.jpg';
import toolbox from './assets/toolbox.png';

function App() {

  return (
    <>
      <div className='navBar'>
        <button>Home</button>
        <button>About</button>
        <button>Location</button>
        <button>Best Sellers</button>
        <button>Contact Us</button>
      </div>
      <div className='card'>
        <h1>TALAMBAN LEZZEL HOUSING SUPPLY CORPORATION</h1>
      </div>

      <div className='backgroundImage'>
        <img src={background} alt="Background" />
      </div>

      <div className='vision'>
        <div className='visionImage'>
          <img src={toolbox} alt="vision" />
        </div>
        <div className='visionT'>
          <h1>Vision</h1>
          <p>jaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja 
            gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapo</p>
        </div>
      </div>

      <div className='mission'>
      <div className='missionT'>
          <h1>Mission</h1>
          <p>jaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja 
            gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapojaja gwapo</p>
        </div>
        <div className='missionImage'>
          <img src={toolbox} alt="vision" />
        </div>
      </div>

      <div className='WtfUS'>
        <h1>Where to find us?</h1>
        <img src={background} alt="Background" />
      </div>

      <div className='Sellers'>
        <h1>Best Sellers</h1>
        <img src={toolbox} alt="vision" />
        <img src={toolbox} alt="vision" />
      </div>

      <div className='footer'>
        <h2>Contact Us</h2>
        <p>TBD - Your contact information or any other content goes here.</p>
      </div>
    </>
  )
}

export default App
