
function addCard(cardInfo){
    return{
        type: 'ADD-CARD',
        payload: cardInfo
    }

}
function remove(card){
    return{
        type: 'REMOVE',
        payload: card
    }
}
function showCard(card){
    return{
        type: 'SHOW-CARD',
        payload: card
    }
}
export {addCard, remove, showCard}