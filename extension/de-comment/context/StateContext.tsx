import React from 'react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'

interface StateContextState {
    darkMode: boolean;
    page: string;
    connect: any;
    address: any;
}

interface StateContextValue extends StateContextState {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const MyStateContext = React.createContext<StateContextValue>({
    darkMode: true,
    page: '/connect',
    connect: undefined,
    address: undefined,
    setDarkMode: () => {},
    setPage: () => {}
});

export const MyStateProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true)
    const [page, setPage] = React.useState('/connect')
    const connect = useMetamask()
    const address = useAddress()
    return (
        <MyStateContext.Provider value={{
            darkMode,
            page,
            connect,
            address,
            setPage,
            setDarkMode
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)