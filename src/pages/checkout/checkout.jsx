import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'
import './checkout.styles.scss';
import CartItem from '../../components/cart-item/cart-item';

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
           <div className="header-block">
                <span>Product</span>  
            </div>  

            <div className="header-block">
                <span>Description</span>  
            </div> 

            <div className="header-block">
                <span>Quantity</span>  
            </div> 

            <div className="header-block">
                <span>Price</span>  
            </div>

            <div className="header-block">
                <span>Remove</span>  
            </div>  
        </div>
        {
           cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem = {cartItem}/>) 
        }

        <div className="total">
            <span className="total">Total: ${cartTotal} </span>
        </div>
        <div className="test-warning">
            *Use following test credit card for paments*
            <br/> 4242 4242 4242 4242 - Exp: 01/20 CVV: 123 
        </div>

        <StripeCheckoutButton price={cartTotal}/>

    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);