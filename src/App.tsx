import { useState } from 'react'
import './App.css'
import "@radix-ui/themes/styles.css";
import LightRays from './components/LightRays';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='pageBG'>
        
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.01}
          noiseAmount={0.1}
          distortion={0.05}
          className="animBG"
        />
        <p className="welcome-message">Welcome to CritTF2Clips!</p>

        <Footer />
      </div>
    </div>
  )
}

export default App
