import  React  from 'react';

export default function RemoveBtn(props){
    // let quantity = props;
    // console.log(quantity)
    return <button
    onClick={() => props.removeFromCart(props.cartItem)}
    >Remove</button>
}