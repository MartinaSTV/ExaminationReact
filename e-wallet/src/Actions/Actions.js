
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
export {addCard, remove}