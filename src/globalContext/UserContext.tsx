import React, { useState } from "react";

const usersList = ["Matias", "Ralhp"];

interface UserContext {
    users: string[]
}

type ChildrenProvider = {
    children: React.ReactNode
}

export const UserContext = React.createContext<UserContext>({
    users: [],
})

export const UserProvider = ({children}: ChildrenProvider) => {
const [users, setUsers] = useState<string[]>(usersList)

    return(
        <UserContext.Provider value={{users}}>
            {children}
        </UserContext.Provider>
    )
}
