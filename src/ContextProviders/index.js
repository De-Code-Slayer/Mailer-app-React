import React, { createContext, useState } from 'react'

const user = {
    user: null,
    messages: null,
    addUserData: () => null,
    addUserMessages: () => null
}
const UserContext = createContext(user)

const UserDataContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [messages, setMessages] = useState(null)

    const addUserData = (data) => {
        setUser(data)
    }

    const addUserMessages = (data) => {
        setMessages(data)
    }

    const value = { user, messages, addUserData: addUserData, addUserMessages: addUserMessages }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
   return React.useContext(UserContext)
}

export default UserDataContext