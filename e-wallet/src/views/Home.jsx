import CardStack from "../components/CardStack"
import { useNavigate } from "react-router-dom"

function Home (){
    const navigate = useNavigate()

    function navigateToForm(){
        navigate('/addCard')
    }
    return(
        <section>
            <h1>E-WALLET</h1>
            <section>
                <CardStack/>     
            </section>
            <button onClick={ navigateToForm }>ADD A NEW CARD</button>

        </section>
    )
}
export default Home