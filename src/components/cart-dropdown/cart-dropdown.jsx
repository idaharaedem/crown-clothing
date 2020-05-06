import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cart, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
           {
               cart.length 
               ?
               cart.map(cartItem => 
               <CartItem key={cartItem.id} item={cartItem}/>)
               :
               <span className="empty-message"> Your Cart Is Empty </span>
           }
         <CustomButton onClick={() => {
              history.push('/checkout')
              dispatch(toggleCartHidden())
              }}> GO TO CHECKOUT </CustomButton>   
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cart: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));