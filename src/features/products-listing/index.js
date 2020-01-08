import React from 'react';

import ProductListItem from '../products-listing/product-list-item'

import { connect } from 'react-redux'

import fetchApi from '../../modules/fectch-api'

// import { cartItemsWithQuantity } from '../cart'
class ProductListing extends React.Component {
    componentDidMount(){
        const { loadProducts } = this.props;
     fetchApi('get', "http://localhost:5000/").then(json => {
        loadProducts(json)
    })
    }

    render(){
        const { addToCart, removeFromCart, products, cart} = this.props;
  
    return <div className = 'product-listing'>
        {
            products.map( product => 
            <ProductListItem 
            product = {product} 
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            cartItem = {cart.filter(cartItem => cartItem.id === product.id)[0]}
            /> )  
        } 
        </div>
    
    }
}
 


function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts : (products) => {
            dispatch({type: 'LOAD', payload : products })
        },
        addToCart : (item) => {
            dispatch({ type: 'ADD', payload : item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload : item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)