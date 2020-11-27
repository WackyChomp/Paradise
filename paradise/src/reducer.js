
export const initialState = {
    basket: [],
    user: null,
};

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