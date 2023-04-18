
const initialstate = {
    cards: JSON.parse(localStorage.getItem('cards')) || [],
    ShowCard: JSON.parse(localStorage.getItem('showCards'))||{}
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case 'ADD-CARD':
            let allCards = [...state.cards, action.payload]
            //spara i localStorage, behövs då stringify som till en databas
            localStorage.setItem('cards', JSON.stringify(allCards))
            return{
                ...state,
                cards: allCards
            }

        case 'REMOVE':

            //local storage hämta ner och ändra och spara igen (då den är en sträng)
           let cardsfromStorage =  JSON.parse(localStorage.getItem('cards'))
           let removeCardfromStoarge = cardsfromStorage.findIndex((card)=> card.id === action.payload)
           const newRemoveCardfromStorage = [...cardsfromStorage] 
           newRemoveCardfromStorage.splice(removeCardfromStoarge, 1)
           localStorage.setItem('cards', JSON.stringify(newRemoveCardfromStorage))


            let removeCard =  state.cards.findIndex((card)=> card.id === action.payload)
            const newcards = [...state.cards]
            newcards.splice(removeCard, 1)

            return{
                ...state,
                cards: newcards
            }
        case 'SHOW-CARD':
            // retunerar indexet och är tru i så fall, om den är tom så blir den -1
            let showCardDelete = state.cards.findIndex((card)=> card.id === action.payload.id)
            localStorage.removeItem('showCards')
           
            if (showCardDelete > -1){ 
                localStorage.setItem('showCards', JSON.stringify(action.payload))
               
                return{
                    ...state,
                    ShowCard: action.payload 
                }
            }
        case 'REMOVE-SHOWCARD':
            localStorage.removeItem('showCard')
            return{
                ...state,
                ShowCard: {}
            }
        
        default:
            return state
    
    }

}

export default reducer