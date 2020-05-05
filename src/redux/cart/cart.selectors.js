import {createSelector} from 'reselect';

//input Selectors
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    //input Selectors
    [selectCart],
    //Return the value we want out of the selector
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector (
    [selectCartItems],

    cartItems => cartItems.reduce((accQuantity, cartItem) =>
    accQuantity + cartItem.quantity, 0)

)