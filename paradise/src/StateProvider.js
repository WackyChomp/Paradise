import React , { createContext, useContext, userReducer } from 'react';

/*Prepares the dataLayer*/
export const StateContext = createContext();

/*Wrap your app and provides the Data layer*/
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

/*Pull information from the data layer*/
export const useStateValue = () => useContext(StateContext);
