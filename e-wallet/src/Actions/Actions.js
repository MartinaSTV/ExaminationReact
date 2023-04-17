
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
function removeShowCard(showCard){
    return{
        type: 'REMOVE-SHOWCARD',
        payload: showCard
    }
}
export {addCard, remove, showCard, removeShowCard}