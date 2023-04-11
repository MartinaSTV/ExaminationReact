// sparat info från form i store från clicket
import './cardForm.scss'
import bitcoin from '../assets/assets/vendor-bitcoin.svg'
import blockhain from '../assets/assets/vendor-blockchain.svg'
import evil from '../assets/assets/vendor-evil.svg'
import ninja from '../assets/assets/vendor-ninja.svg'
import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCard } from '../Actions/Actions'


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


    return(

        <section className='form'>
            <label htmlFor="">CARD NUMBER</label>
            <input type="text" placeholder="Kort nummer" onChange={(event) => { setcardNumber(event.target.value); }}/>
            <label htmlFor="">CARDHOLDER NAME</label> 
            <input type="text" placeholder="Kort Namn" onChange={(event) => { setcardName(event.target.value); }}/>

            <label htmlFor="">VALID THRU</label>
            <input type="text" onChange={(event) => { setvalid(event.target.value); }}/>

            <label htmlFor="CVV">CVV</label>
            <input type="text" onChange={(event) => { setcvv(event.target.value); }} />

            <label htmlFor="vendors">VENDOR</label>
            <select name="vendors" id="" onChange={ getValue }>
                <option value={`bitcoin ${ bitcoin} #FFAE34`}>BITCOIN INC</option>
                <option value={`ninja ${ ninja} #222222`}>NINJA BANK</option>
                <option value={`blockchain ${ blockhain} #8B58F9`}>BLOCKCHAIN INC</option>
                <option value={`evil ${ evil}  #F33355`}>EVIL CORP</option>
            </select>
            <button onClick={ SaveInfo }>AddCard</button>
        </section>
    )

}
export default CardForm