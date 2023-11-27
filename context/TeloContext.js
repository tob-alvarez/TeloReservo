import React, { createContext, useContext, useState } from 'react';

export const MyContext = createContext();


const TeloContext = ({ children }) => {
    const [myState, setMyState] = useState('Valor inicial');

    const updateState = () => {
        setMyState('Nuevo valor');
    };

    return (
        <MyContext.Provider value={{ myState, updateState }}>
            {children}
        </MyContext.Provider>
    );
};


export default TeloContext;
