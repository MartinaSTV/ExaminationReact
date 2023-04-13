const initialstate = {
    cards: [],
    ShowCard:{}
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case 'ADD-CARD':
            let allCards = [...state.cards, action.payload]

            return{
                ...state,
                cards: allCards
            }

        case 'REMOVE':
            let removeCard =  state.cards.findIndex((card)=> card.id === action.payload)
            const newcards = [...state.cards]
            newcards.splice(removeCard, 1)

            return{
                ...state,
                cards: newcards
            }
        case 'SHOW-CARD':
            return{
                ...state,
                ShowCard: action.payload
            }
        default:
            return state
    
    }

}

export default reducer