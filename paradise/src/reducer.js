
export const initialState = {
    basket: [],
    user: null,
};

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);        /*reducer maps through the basket and tallies up the total (fancy for loop)*/

const reducer = (state, action) => {     /*the reducer listens for dispatch*/
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;
    }

    /*console.log(action);        //shows what data is being passed */
};

export default reducer;