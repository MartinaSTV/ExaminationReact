import './AddCard.scss'
import CardForm from "../components/CardForm/CardForm"
import Card from "../components/Card/Card"

function AddCard(){

    return(
        <section className="add-card">
            <h1 className='add-card__title'>Add a new bank card</h1>
            <h4 className='add-card__text'>New Card</h4>
            <article className='add-card__card'>
                <Card/>
            </article>
            <article className='add-card__form'>
              <CardForm/>
            </article>
        </section>
    )
}
export default AddCard