import getRandomPhraseFromArray from '../utils/getRandomPhraseFromArray'
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/PhraseButton.css'

const PhraseButton = ({ setPhraseRandom, setImageSelected}) => {

const HandleClick = () => {
    const phrase = getRandomPhraseFromArray(phrases)
    setPhraseRandom(phrase)

    const background = getRandomPhraseFromArray(arrImages)
    setImageSelected(background)
}

return(
    <button className='card_button' onClick={HandleClick}>Test your might</button>
)

}

export default PhraseButton