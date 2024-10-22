import React, { createContext, useContext, useEffect, useState } from "react";

// Criação do contexto
const UserContext = createContext();

// Criação do Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const getUser = (userData) => {
        setUser(userData);
    };

    const deleteUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, getUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser deve ser usado dentro de um UserProvider");
    }

    return context;
};