// loopa ut Cards 
// hämta info från store och skriv ut i card i loopen (glöme ej bild och färg som i boooks uppgiften )
import { useSelector } from "react-redux"
import Card from "../Card/Card"
import './CardStack.scss'
function CardStack(){

    const savedCards = useSelector((state) => { return state.cards})
    console.log(savedCards)


  /*   if (savedCards.length > 0){

        const cardsElement = savedCards.map((item)=>{
            return <Card item ={ item } key={item.id}/>
        })

    }else{
       console.log('tomt i store')
       let id = 1
       const emptyStore = [{
        id: id++,
        cardNumber: 'xxxx xxxx xxxx xxxx',
        cardName: 'FIRSTNAME LASTNAME',
        valid: 'MM/YY', 
       }]

       const EmtyElement = emptyStore.map((item)=>{
        return <Card item ={ item } key={item.id}/>
    })
    } */

     const cardsElement = savedCards.map((item)=>{
        return <Card item ={ item } key={item.id}/>
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