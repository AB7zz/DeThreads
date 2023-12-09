import React from 'react'
import createMetaMaskProvider from 'metamask-extension-provider'
require('dotenv').config();

interface UserDetails {
    wallet: string;
    username: string;
    karma: number;
}

interface StateContextState {
    darkMode: boolean;
    page: string;
    userDetails: UserDetails;
}

interface StateContextValue extends StateContextState {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;
    setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
    handleConnect: () => void;
}

const MyStateContext = React.createContext<StateContextValue>({
    darkMode: true,
    page: '/connect',
    userDetails: {
        wallet: '0xad142vasdas234',
        username: 'AB7zz',
        karma: 0,
    },
    setDarkMode: () => {},
    setPage: () => {},
    handleConnect: () => {},
    setUserDetails: () => {}
});


export const MyStateProvider = ({ children }) => {
    const [darkMode, setDarkMode] = React.useState(true)
    const [page, setPage] = React.useState('/connect')
    const [userDetails, setUserDetails] = React.useState({
        wallet: '0xad142vasdas234',
        username: 'AB7zz',
        karma: 0
    })

    const handleConnect = () => {
        const provider = createMetaMaskProvider()
        if (provider) {
            console.log('provider detected', provider)  
        }else{
            console.log('no provider')
        }
    }

    return (
        <MyStateContext.Provider value={{
            darkMode,
            page,
            userDetails,
            setUserDetails,
            handleConnect,
            setPage,
            setDarkMode
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)