import React from 'react'
import {ethers} from 'ethers'
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react'

const MyStateContext = React.createContext()

export const MyStateProvider = ({ children }) => {
    const {contract} = useContract("0xEaBB9669F54C06Ad561F327B90ebfBE50fb47592")
    const {mutateAsync: insertComment} = useContractWrite(contract, 'insertComment')
    const {mutateAsync: createAccount} = useContractWrite(contract, 'createAccount')
    const address = useAddress()
    console.log(address)
    const connect = useMetamask()
    const [comments, setComments] = React.useState()
    const [users, setUsers] = React.useState()
    const [darkMode, setDarkMode] = React.useState(true)
    const [userDetails, setUserDetails] = React.useState({
        wallet: '',
        username: '',
        karma: 0
    })

    const handleCreateAccount = async(username) => {
        const data = await createAccount({
            args:[
                address,
                username
            ]
        })
        console.log(data)
    }

    const handleInsertComment = async(url, comment) => {
        const data = await insertComment({
            args:[
                url,
                comment
            ]
        })
        console.log(data)
        window.alert('Comment Inserted!')
    }

    const handleReadComments = async(url) => {
        try{
            if(contract){
                console.log(url)
                console.log('handleReadComments')
                const data = await contract.call('readComments', [url])
                const arrayOfMaps = [];
                
                for (let columnIndex = 0; columnIndex < data[0].length; columnIndex++) {
                    const map = new Map();

                    for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
                        map.set(rowIndex, data[rowIndex][columnIndex]);
                    }

                    arrayOfMaps.push(map);
                }
                console.log(arrayOfMaps)
                setComments(arrayOfMaps)
            }
        }catch(error){
            console.log(error)
        }
    }

    const fetchAllUsers = async() => {
        if(contract){
            console.log('fetchAllUsers')
            const data = await contract.call('readUsers')
            setUsers(data)
        }
    }

    return (
        <MyStateContext.Provider value={{
            darkMode,
            userDetails,
            address,
            users,
            connect,
            fetchAllUsers,
            handleInsertComment,
            setUserDetails,
            setDarkMode,
            handleCreateAccount,
            handleReadComments
        }}>
        {children}
        </MyStateContext.Provider>
    );
};
export const useStateContext =  () => React.useContext(MyStateContext)