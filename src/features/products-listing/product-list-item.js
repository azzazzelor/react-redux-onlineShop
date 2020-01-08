import React from 'react';

import AddBtn from './add-btn';
import RemoveBtn from './remove-btn'
function ProductlistItem(props) {
    return (
        <div className = 'product-list-item'>
            <h3>{ props.product.name}</h3>
            <img 
                height = {100}
                title = {props.product.name}
                src = {`/products/${props.product.image}`}
                />
            <div>{ props.product.description}</div>
            <div>${props.product.price}</div>
            <div>
            <AddBtn
            addToCart = {props.addToCart}
            cartItem = {props.cartItem}
            product={props.product}
            />


            {
                props.cartItem
                    ? <RemoveBtn
                    removeFromCart = {props.removeFromCart}
                    cartItem = {props.cartItem}
                    product={props.product}
                    />
                    : null

            }
            
            </div>
        </div>
    );
}

export default ProductlistItem