import React from 'react'
require('dotenv').config();

interface StateContextState {
    darkMode: boolean;
    page: string;
}

interface StateContextValue extends StateContextState {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const MyStateContext = React.createContext<StateContextValue>({
    darkMode: true,
    page: '/comments',
    setDarkMode: () => {},
    setPage: () => {}
});

export const MyStateProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true)
    const [page, setPage] = React.useState('/comments')
    return (
        <MyStateContext.Provider value={{
            darkMode,
            page,
            setPage,
            setDarkMode
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)