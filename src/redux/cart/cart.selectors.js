import {createSelector} from 'reselect';

//input Selectors
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    //input Selectors
    [selectCart],
    //Return the value we want out of the selector
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],

    cartItems => cartItems.reduce((accQuantity, cartItem) =>
    accQuantity + cartItem.quantity, 0)

)
//[1,2,3,4,5]
export const selectCartTotal = createSelector (
    [selectCartItems],

    cartItems => cartItems.reduce((acc, cartItem) => 
        acc + cartItem.quantity * cartItem.price, 0
    )
)