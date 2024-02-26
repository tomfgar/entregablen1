import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import getRandomPhraseFromArray from './utils/getRandomPhraseFromArray.js'
import PhraseCard from './components/PhraseCard.jsx'
import PhraseButton from './components/PhraseButton.jsx'
import arrImages from './utils/arrImages.json'

function App() {
  
  const initialValue = getRandomPhraseFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialImage = getRandomPhraseFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(initialImage)

  const objStyle = {
  backgroundImage: `url("/fondo${imageSelected}.png")` 
  }

  return (
  <div className='app' style={objStyle}>
  <h1 className='app_title'>Galleta de la Fortuna / Fortune Cookies</h1> 
  <article className='app_card'>
  <PhraseCard phraseRandom ={phraseRandom} />
  <PhraseButton setPhraseRandom ={setPhraseRandom}
  setImageSelected={setImageSelected}/>
  </article> 
  </div>
)

}

export default App
