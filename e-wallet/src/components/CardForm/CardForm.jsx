// sparat info från form i store från clicket
import './CardForm.scss'
import bitcoin from '../../assets/assets/vendor-bitcoin.svg'
import blockhain from '../../assets/assets/vendor-blockchain.svg'
import evil from '../../assets/assets/vendor-evil.svg'
import ninja from '../../assets/assets/vendor-ninja.svg'
import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCard } from '../../Actions/Actions'

function CardForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useId();

    let [vendor, setvendor] = useState();
    let [cardNumber, setcardNumber] = useState();
    let [cardName, setcardName] = useState();
    let [valid, setvalid] = useState();
    let [cvv, setcvv] = useState();

    function SaveInfo(){
        
        const splitVendor = vendor.split(' ')
    
        let formValue = {
            id: id,
            Vendor: splitVendor,
            cardNumber: cardNumber,
            cardName: cardName,
            valid: valid, 
            cvv:cvv
        }
        console.log(formValue)

        dispatch(addCard(formValue))

        navigate('/')
    };

    function getValue(event){
        setvendor(event.target.value)
    };

    function getInputNumber(event){

         setcardNumber(event.target.value)

    }

    return(

        <section className='form'>
            <label className='form__label' htmlFor="">CARD NUMBER</label>
            <input className='form__input' type="number" placeholder="XXXX XXXX XXXX XXXX" onChange={ getInputNumber}/>
            <label className='form__label' htmlFor="">CARDHOLDER NAME</label> 
            <input className='form__input' type="text" placeholder="FIRSTNAME" onChange={(event) => { setcardName(event.target.value); }}/>

            <article className='form__article'>
                <article className='form_small'>
                    <label className='form__ValidThru' htmlFor="">VALID THRU</label>
                    <input className='form__input' type="number" onChange={(event) => { setvalid(event.target.value); }}/>
                </article>
                <article className='form__small'>    
                    <label className='form__label' htmlFor="CVV">CVV</label>
                    <input  className='form__input' type="number" onChange={(event) => { setcvv(event.target.value); }} />
                </article>
            </article>
            <label className='form__label' htmlFor="vendors">VENDOR</label>
            <select name="vendors" id="" onChange={ getValue } className='form__input'>
                <option value="">Choose Vendor</option>
                <option value={`bitcoin ${ bitcoin } #FFAE34 #FFFFFF`}>BITCOIN INC</option>
                <option value={`ninja ${ ninja } #222222 #FFFFFF`}>NINJA BANK</option>
                <option value={`blockchain ${ blockhain } #8B58F9 #FFFFFF`}>BLOCKCHAIN INC</option>
                <option value={`evil ${ evil } #F33355 #FFFFFF`}>EVIL CORP</option>
            </select>
            <button className='form__button' onClick={ SaveInfo }>AddCard</button>
        </section>
    )

}
export default CardForm