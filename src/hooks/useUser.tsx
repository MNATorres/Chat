import React, { useContext, useState } from "react";

interface UserContext {
  loggedUser: string | null;
  setLoggedUser: (user: string | null) => void;
  usersList: string[] | null
}

type ChildrenProvider = {
  children: React.ReactNode;
};

const usersList = ["Matias", "Angel", "Fede", "Otro Usuario"];

export const UserContext = React.createContext<UserContext>({
  loggedUser: null,
  setLoggedUser: () => {},
  usersList: []
});

export const UserProvider = ({ children }: ChildrenProvider) => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [userList, setUserList] = useState<string[] | null>(usersList)

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser, usersList: userList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
