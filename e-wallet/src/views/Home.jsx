import CardStack from "../components/CardStack/CardStack"
import { useNavigate } from "react-router-dom"
import'./Home.scss'

function Home (){
    const navigate = useNavigate()

    function navigateToForm(){
        navigate('/addCard')
    }
    return(
        <section className="home">
            <h1 className="home__title">E-Wallet</h1>
            <h4 className="home__text">Active Card</h4>
            <section>
                <CardStack/>     
            </section>
            <button className="home__button" onClick={ navigateToForm } >ADD A NEW CARD</button>
        </section>
    )
}
export default Home