// loopa ut Cards 
// hämta info från store och skriv ut i card i loopen (glöme ej bild och färg som i boooks uppgiften )
import { useSelector } from "react-redux"
import Card from "../Card/Card"
import './CardStack.scss'
function CardStack(){

    const savedCards = useSelector((state) => { return state.cards})
    console.log(savedCards)

     const cardsElement = savedCards.map((item)=>{
        return <Card item ={ item } key={ item.id }/>
    }) 

    return(
        <section className="card-stack">
           
            <section className="card-stack__cards" >
                {cardsElement}
            </section>
         
        </section>
    )

}
export default  CardStack