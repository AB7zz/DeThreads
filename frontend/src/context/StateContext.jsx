import React from 'react'
import { ethers } from 'ethers'
import contractJson from '../artifacts/DeThread.json'

const MyStateContext = React.createContext()

export const MyStateProvider = ({ children }) => {
    const [users, setUsers] = React.useState()
    let contract
    const [darkMode, setDarkMode] = React.useState(true)
    const [userDetails, setUserDetails] = React.useState({
        wallet: '',
        username: '',
        karma: 0
    })

    const fetchAllUsers = async() => {
        const res = await contract.readUsers()
        console.log(res)
    }
    const getSignerAndContract = async() => {
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            const contractAbi = contractJson.abi
            const contractAddress = '0x794700AD454303c1307b2889A4e353600883d378'
            contract = new ethers.Contract(contractAddress, contractAbi, provider)
            console.log(contract)
            fetchAllUsers()
        }catch(error){
            console.log(error)
        }
    }


    return (
        <MyStateContext.Provider value={{
            darkMode,
            userDetails,
            users,
            setUserDetails,
            setDarkMode,
            getSignerAndContract,
            fetchAllUsers
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)