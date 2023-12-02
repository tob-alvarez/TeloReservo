import React, { createContext, useContext, useState } from 'react';
import axios from '../config/axios';
export const MyContext = createContext();


const TeloContext = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    return (
        <MyContext.Provider value={{ user, authenticated, loading, setAuthenticated, setUser }}>
            {children}
        </MyContext.Provider>
    );
};


export default TeloContext;
