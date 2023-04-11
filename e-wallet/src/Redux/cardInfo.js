const initialstate = {
    cards: []
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case 'ADD-CARD':
            let allCards = [...state.cards, action.payload]

            return{
                ...state,
                cards: allCards
            }
        default:
            return state
    
    }

}

export default reducer