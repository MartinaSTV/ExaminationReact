// sparat info från form i store från clicket
import './CardForm.scss'
import bitcoin from '../../assets/assets/vendor-bitcoin.svg'
import blockhain from '../../assets/assets/vendor-blockchain.svg'
import evil from '../../assets/assets/vendor-evil.svg'
import ninja from '../../assets/assets/vendor-ninja.svg'
import chipLight from '../../assets/assets/chip-light.svg'
import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCard } from '../../Actions/Actions'

function CardForm(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useId();

    let [vendor, setvendor] = useState(`bitcoin ${ bitcoin } #FFAE34 #FFFFFF ${chipLight}`);
    let [cardNumber, setcardNumber] = useState();
    let [cardName, setcardName] = useState();
    let [valid, setvalid] = useState();
    let [cvv, setcvv] = useState();

    function SaveInfo(){

       let splitVendor = []
     
        splitVendor = vendor.split(' ')  
        
        let formValue = {
            id: id,
            Vendor: splitVendor,
            cardNumber: cardNumber,
            cardName: cardName,
            valid: valid, 
            cvv:cvv
        };
     
        //Kontrollera formulär
        formValue.cardNumber.length < 19 || formValue.cardNumber.length > 20 
        && formValue.valid.length < 4 || formValue.valid.length > 5  ?
         alert('Fill in the application')
        :
        dispatch(addCard(formValue)); 


        formValue.cardNumber.length < 19 || formValue.cardNumber.length > 20  
         && formValue.valid.length < 4 || formValue.valid.length > 5  ?
         alert('Fill in the application correct please')
        :
        navigate('/');
       
    };

    function getValue(event){
        setvendor(event.target.value)
    };

    function getInputNumber(event){
      
        setcardNumber(event.target.value) 
    }

    return(

        <form className='form' /* onClick={(e) => e.preventDefault()} */ >
            <label className='form__label' htmlFor="">CARD NUMBER</label>
            <input className='form__input' type="number" placeholder="XXXX XXXX XXXX XXXX" onChange={ getInputNumber}/>
            <label className='form__label' htmlFor="">CARDHOLDER NAME</label> 
            <input className='form__input' type="text" required placeholder="FIRSTNAME" onChange={(event) => { setcardName(event.target.value); }}/>

            <article className='form__article'>
                <article className='form_small'>
                    <label className='form__ValidThru' htmlFor="">VALID THRU</label>
                    <input className='form__input' type="number"  required onChange={(event) => { setvalid(event.target.value); }}/>
                </article>
                <article className='form__small'>    
                    <label className='form__label' htmlFor="CVV">CVV</label>
                    <input  className='form__input' type="number" required onChange={(event) => { setcvv(event.target.value); }} />
                </article>
            </article>
            <label className='form__label' htmlFor="vendors">VENDOR</label>
            <select name="vendors" id="" onChange={ getValue } className='form__input' required>
                <option value={'NoVendor'}>Choose Vendor</option>
                <option value={`bitcoin ${ bitcoin } #FFAE34 #FFFFFF ${chipLight}`}>BITCOIN INC</option>
                <option value={`ninja ${ ninja } #222222 #FFFFFF ${chipLight}`}>NINJA BANK</option>
                <option value={`blockchain ${ blockhain } #8B58F9 #FFFFFF ${chipLight}`}>BLOCKCHAIN INC</option>
                <option value={`evil ${ evil } #F33355 #FFFFFF ${chipLight}`}>EVIL CORP</option>
            </select>
            <button type='button' className='form__button' /* disabled={cvv === "" && valid === '' && cardName ==='' && cardNumber === '' && vendor === ''} */ onClick={ SaveInfo }>AddCard</button>
        </form>
    )
}
export default CardForm