import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cart}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cart.map(cartItem => 
               <CartItem key={cartItem.id} item={cartItem}/>)
           }
         <CustomButton> GO TO CHECKOUT </CustomButton>   
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cart: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown)