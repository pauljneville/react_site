

import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [swiperIndex, setSwiperIndex] = useState(0);

    return <StateContext.Provider value={{ swiperIndex, setSwiperIndex }}>
        {children}
    </StateContext.Provider>
}