import React, { useState } from "react";

interface UserContext {
  loggedUser: string | null;
  setLoggedUser: (user: string | null) => void;
}

type ChildrenProvider = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<UserContext>({
  loggedUser: null,
  setLoggedUser: () => {},
});

export const UserProvider = ({ children }: ChildrenProvider) => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
