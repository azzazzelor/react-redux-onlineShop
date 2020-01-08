import  React  from 'react';
import {connect} from 'react-redux'
import CheckoutForm from './form'
import Cart from '../cart'

function submitOrder(values, cart){
    const {email, name} = values.order;
    alert('You submit your order!')

}
function Checkout(props) {
    const {cart } = props;

    return<>
     <div style = {{border: '1px solid black'}}>
        <Cart/>
    </div>
    <CheckoutForm onSubmit = {(values) => submitOrder(values, cart)}/>
    </>
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(Checkout)