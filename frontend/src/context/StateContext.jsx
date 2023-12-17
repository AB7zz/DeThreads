import React from 'react'
import { ethers } from 'ethers'
import contractJson from '../artifacts/DeThread.json'

const MyStateContext = React.createContext()

export const MyStateProvider = ({ children }) => {
    const [users, setUsers] = React.useState()
    const [username, setUsername] = React.useState('AB7zz')
    const [address, setAddress] = React.useState('')
    const [contract, setContract] = React.useState()
    const [darkMode, setDarkMode] = React.useState(true)
    const [comments, setComments] = React.useState('')
    const [userDetails, setUserDetails] = React.useState({
        wallet: '',
        username: '',
        karma: 0
    })

    // const fetchAllUsers = async() => {
    //     const res = await contract.readUsers()
    // }

    const getSignerAndContract = async() => {
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            const contractAbi = contractJson.abi
            const contractAddress = '0x24373760890Fa33028E1B02941217a45b765666F'
            const contractDummy = new ethers.Contract(contractAddress, contractAbi, signer)
            const signerAddress = await signer.getAddress();
            setAddress(signerAddress)
            setContract(contractDummy)
            console.log(contractDummy, signerAddress)
        }catch(error){
            console.log(error)
        }
    }

    const createAccount = async(username) => {
        try {
            console.log(contract)
            const tx = await contract.createAccount(username)
            setUsername(username)
            console.log(tx)
        } catch (error) {
            console.log(error)
        }
    }

    const insertComment = async(url, comment) => {
        try {
            console.log(url, comment)
            const tx = await contract.insertComment(url, comment)
            console.log(tx)
        } catch (error) {
            console.log(error)
        }
    }

    const readComments = async(url) => {
        try {
            console.log(url)
            const tx = await contract.readComments(url)
            console.log(tx)
            setComments(tx)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MyStateContext.Provider value={{
            darkMode,
            userDetails,
            users,
            address,
            username,
            comments,
            setComments,
            setUsername,
            createAccount,
            setAddress,
            setUserDetails,
            setDarkMode,
            getSignerAndContract,
            insertComment,
            readComments
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)