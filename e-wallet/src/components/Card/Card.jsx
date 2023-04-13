import './Card.scss'
import chipDark from '../../assets/assets/chip-dark.svg'
import bitC from '../../assets/assets/vendor-bitcoin.svg'
import chipL from '../../assets/assets/chip-light.svg'
import { useDispatch } from 'react-redux'
import { remove } from '../../Actions/Actions'
import { showCard } from '../../Actions/Actions'

function Card(props){
    const dispatch = useDispatch()
    console.log(props);

    function decrease(){
        console.log(props.item)
        dispatch(remove(props.item.id))
    }

    function handleclikedCard(){
        dispatch(showCard(props.item))
    }
        return(
            
             <section  onClick={ handleclikedCard}  className='card' style={ props.item && props.item.Vendor[3]? {color:`${props.item.Vendor[3]}`, background: `${props.item.Vendor[2]}`} :{backround: 'grey' } }>
                <section className='card__section' >
                    <article  className='card__pictures'>
                        <img src={chipL} alt="chip"/> 
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