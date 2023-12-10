import React from 'react'
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react'

const MyStateContext = React.createContext()

export const MyStateProvider = ({ children }) => {
    const {contract} = useContract("0x0f6571E6090513172cB9237E4B81DCD449d81A15")
    const {mutateAsync: insertComment} = useContractWrite(contract, 'insertComment')
    const address = useAddress()
    console.log(address)
    const connect = useMetamask()
    const [darkMode, setDarkMode] = React.useState(true)
    const [userDetails, setUserDetails] = React.useState({
        wallet: '',
        username: '',
        karma: 0
    })

    const handleInsertComment = async(url, comment) => {
        const data = await insertComment({
            args:[
                url,
                comment
            ]
        })
        console.log(data)
    }

    const handleReadComments = async(url) => {
        try{
            if(contract){
                console.log(url)
                console.log('handleReadComments')
                const data = await contract.call('readComments', [url])
                console.log(data)
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <MyStateContext.Provider value={{
            darkMode,
            userDetails,
            address,
            connect,
            handleInsertComment,
            setUserDetails,
            setDarkMode,
            handleReadComments
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)