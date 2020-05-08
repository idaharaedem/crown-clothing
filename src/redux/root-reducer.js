import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
//local storage as my default storage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.Reducer';


//JSON object for possible persists we want for redux to use
const persistConfig = {
    key: 'root',
    storage,
    //The reducer you want to persist/store
    whitelist: ['cart']
}

 const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer 
});

export default persistReducer(persistConfig, rootReducer);