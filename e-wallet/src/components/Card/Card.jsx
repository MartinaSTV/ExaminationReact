import './Card.scss'
import chipD from '../../assets/assets/chip-dark.svg'
import bitC from '../../assets/assets/vendor-bitcoin.svg'
import chipL from '../../assets/assets/chip-light.svg'

function Card(props){

    function remove(){
        
    }

   let propsen = Object.keys(props).length
   console.log(propsen)

     if (propsen === 0 ){
        console.log('hej')
        return(
            <section className='card'>
                <section>
                    <article><img src={chipD} alt=""/> <img src={bitC} alt="" /></article>
                    <p>xxxx xxxx xxxx xxxx</p>
                    <article><p>CARDHOLDER NAME</p><p>FIRSTNAME LASTNAME</p></article>
                    <article><p>VALID THRU</p><p>MM/YY</p></article>
                </section>
            </section>
        )
        
     }else{
        return(
            <section className='card'  style={ {background: `${props.item.Vendor[2]}` }}>
                <section >
                    <article>
                        <img src={chipL} alt=""/> 
                        <img src={props.item.Vendor[1]} alt=""/>
                        <button onClick={ remove }>x</button>
                    </article>
                    <p>{props.item.cardNumber}</p>
                    <article><p>CARDHOLDER NAME</p><p>{props.item.cardName}</p></article>
                    <article><p>VALID THRU</p><p>{props.item.valid}</p></article>
                </section>
            </section>
        )
     }
}
export default Card