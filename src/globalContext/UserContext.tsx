import React, { useState } from "react";

const usersList = ["Matias", "Ralhp"];

interface UserContext {
    loggedUser: string | null
}

type ChildrenProvider = {
    children: React.ReactNode
}

export const UserContext = React.createContext<UserContext>({
    loggedUser: null
})

export const UserProvider = ({children}: ChildrenProvider) => {
const [loggedUser, setLoggedUser] = useState<string | null>(null)

    return(
        <UserContext.Provider value={{loggedUser}}>
            {children}
        </UserContext.Provider>
    )
}
