import './Card.scss'
import chipDark from '../../assets/assets/chip-dark.svg'
import bitC from '../../assets/assets/vendor-bitcoin.svg'
import { useDispatch } from 'react-redux'
import { showCard, removeShowCard, remove } from '../../Actions/Actions'

function Card(props){
    const dispatch = useDispatch()
    console.log(props);

    function decrease(){
        console.log(props.item)
        props.item.hasOwnProperty('id')?
        dispatch(remove(props.item.id)) : ''

        // ta bort från showcard... ?? fungerar ej
        dispatch(removeShowCard(props.item)) 
    }

    function handleclikedCard(){

        dispatch(showCard(props.item))
    }
        return(
             <section  onClick={ handleclikedCard}  className='card' style={ props.item && props.item.Vendor[3]? {color:`${props.item.Vendor[3]}`, background: `${props.item.Vendor[2]}`} :{backround: 'grey' } }>
                <section className='card__section' >
                    <article  className='card__pictures'>
                        <img src={props.item ? props.item.Vendor[4]: chipDark} alt="chip"/> 
                        <img src={props.item ? props.item.Vendor[1]: bitC} alt="vendor logo" className='card__img'/>
                        <button className='card__x' onClick={ decrease }>x</button>
                    </article>
                    <p  className='card__number'>{props.item? props.item.cardNumber: 'XXXX XXXX XXXX XXXX'}</p>
                     <article  className='card__labels' style={ props.item ? {color:`${ props.item.Vendor[3]}` }: { color: 'black' }} > 
                        <p>CARDHOLDER NAME</p>
                        <p className='card__validThru'>VALID THRU</p>
                    </article> 
                    <article className='card__inputs'>
                        <p className='card__title'>{props.item ? props.item.cardName : 'FIRSTNAME LASTNAME' }</p>
                        <p className='card__valid'>{props.item ? props.item.valid: 'MM/YY'}</p>
                    </article>
                </section>
            </section> 
        )
}
export default Card