// 1- Criando contexto

import {createContext, useState} from "react";

// eslint-disable-next-line no-undef
export const CounterContext = createContext();

// 2 - Criar Provider

export const CounterContextProvider = ({children}) => {
    const [counter,setCounter] = useState(0);
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>

    );
}

