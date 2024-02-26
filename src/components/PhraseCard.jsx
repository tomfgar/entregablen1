import './styles/PhraseCard.css'

const PhraseCard = ({ phraseRandom }) => {

const { phrase } = phraseRandom

return(
    <p className='phrase_card'>{phrase}</p>
)

}

export default PhraseCard