import CartItem from "../../components/cart-item/cart-item";

//checking if the card item excists or not while adding
export const addItemToCArt = (cartItems, cartItemToAdd) => {
    const exsistingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

        if(exsistingCartItem) {
            return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
            )
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemsRemove) => {
    
    const exsistingItem = cartItems.find(
        cartItem => cartItem.id === cartItemsRemove.id);

    if(exsistingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsRemove.id);
    }

    return cartItems.map(
       cartItem => cartItem.id === cartItemsRemove.id 
       ?
       {...cartItem, quantity: cartItem.quantity - 1}
       :
       cartItem
    )
}