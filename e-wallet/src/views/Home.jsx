// hämta det klickade kortet från store och lägg in nya prpps på card.
// Ternery operator (till card) till vad den skall göra om propsen är tomma.
import CardStack from "../components/CardStack/CardStack"
import { useNavigate } from "react-router-dom"
import'./Home.scss'
import Card from "../components/Card/Card"
import { useSelector } from "react-redux"

function Home (){
    const navigate = useNavigate()

    const showCard = useSelector((state) => { return state.ShowCard})
    console.log(showCard)


    function navigateToForm(){
        navigate('/addCard')
    }
    return(
        <section className="home">
            <h1 className="home__title">E-Wallet</h1>
            <h4 className="home__text">Active Card</h4>
            <section className="home__showCard">
              { showCard.hasOwnProperty('Vendor')? <Card item={ showCard }/> : '' }
               
            </section>
            <section className="home__cardStack">
                <CardStack/>     
            </section>
            <button className="home__button" onClick={ navigateToForm } >ADD A NEW CARD</button>
        </section>
    )
}
export default Home