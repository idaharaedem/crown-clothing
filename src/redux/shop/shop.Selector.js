import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],

    shop => shop.collections
);

//looping through the object array like it was a normal array
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],

    collections => Object.keys(collections).map(key => collections[key])
)

//For the routing of the certain pages eg hats etc
export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectShopCollections],
        
      collections => collections[collectionUrlParam]
 )

