import React from 'react'
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react'

const MyStateContext = React.createContext()

export const MyStateProvider = ({ children }) => {
    const {contract} = useContract("0x08bAA308336ED50F7C081bF2493B79FEB50E27a9")
    const {mutateAsync: insertComment} = useContractWrite(contract, 'insertComment')
    const address = useAddress()
    const connect = useMetamask()
    const [darkMode, setDarkMode] = React.useState(true)
    const [userDetails, setUserDetails] = React.useState({
        wallet: '',
        username: '',
        karma: 0
    })

    return (
        <MyStateContext.Provider value={{
            darkMode,
            userDetails,
            address,
            connect,
            setUserDetails,
            setDarkMode
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)