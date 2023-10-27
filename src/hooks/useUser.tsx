import React, { Dispatch, SetStateAction, useContext, useState } from "react";

interface UserContext {
  loggedUser: string | null;
  setLoggedUser: (user: string | null) => void;
  usersList: string[];
  setUsersList: Dispatch<SetStateAction<string[]>>;
}

type ChildrenProvider = {
  children: React.ReactNode;
};

const users = ["Matias", "Angel", "Fede", "Otro Usuario"];

export const UserContext = React.createContext<UserContext>({
  loggedUser: null,
  setLoggedUser: () => {},
  usersList: [],
  setUsersList: () => {}
});

export const UserProvider = ({ children }: ChildrenProvider) => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<string[]>(users);

  return (
    <UserContext.Provider
      value={{ loggedUser, setLoggedUser, usersList, setUsersList }}
    >
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
