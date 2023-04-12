import './Card.scss'
import chipDark from '../../assets/assets/chip-dark.svg'
import bitC from '../../assets/assets/vendor-bitcoin.svg'
import chipL from '../../assets/assets/chip-light.svg'

function Card(props){

    function remove(){

    }

   let propsen = Object.keys(props).length
   console.log(propsen)

     if (propsen === 0 ){
    
        return(
            <section className='card'>
                <section className='card__section'>
                    <article className='card__pictures'>
                        <img src={chipDark} alt=""/> 
                        <img src={bitC} alt=""className='card__img' />
                    </article>
                    <p  className='card__number'>XXXX XXXX XXXX XXXX</p>
                    <article className='card__labels'>
                        <p>CARDHOLDER NAME</p>
                        <p className='card__validThru'>VALID THRU</p>
                    </article>
                    <article className='card__inputs'>
                        <p className='card__title'>FIRSTNAME LASTNAME</p>
                        <p className='card__valid'>MM/YY</p>
                    </article>
                </section>
            </section>
        )
        
     }else{
        return(
            <section className='card' style={ {background:`${props.item.Vendor[2]}`, color:`${ props.item.Vendor[3]}`}}>
                <section className='card__section' >
                    <article  className='card__pictures'>
                        <img src={chipL} alt="chip"/> 
                        <img src={props.item.Vendor[1]} alt="vendor logo" className='card__img'/>
                        <button className='card__x' onClick={ remove }>x</button>
                    </article>
                    <p  className='card__number'>{props.item.cardNumber}</p>
                    <article className='card__labels' style={{color:`${props.item.Vendor[3]}`}}>
                        <p>CARDHOLDER NAME</p>
                        <p className='card__validThru'>VALID THRU</p>
                    </article>
                    <article className='card__inputs'>
                        <p className='card__title'>{props.item.cardName}</p>
                        <p className='card__valid'>{props.item.valid}</p>
                    </article>
                </section>
            </section>
        )
     }
}
export default Card