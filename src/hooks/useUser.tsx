import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from "react";

interface UserContext {
  loggedUser: string | null;
  setLoggedUser: (user: string | null) => void;
  usersList: string[];
  setUsersList: Dispatch<SetStateAction<string[]>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  handleAddUser: () => void;
}

type ChildrenProvider = {
  children: React.ReactNode;
};

const listUsers = ["matias", "otro usuario", "y otro mas"]

export const UserContext = React.createContext<UserContext>({
  loggedUser: null,
  setLoggedUser: () => {},
  usersList: [],
  setUsersList: () => {},
  user: "",
  setUser: () => {},
  handleAddUser: () => {},
});

export const UserProvider = ({ children }: ChildrenProvider) => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<string[]>(listUsers);
  const [user, setUser] = useState("");

  const loadUsers = () => {
    fetch("https://chat-back-three.vercel.app/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersList(data);
        console.log("userLisst",usersList)
      });
  };

  useEffect(() => {
    loadUsers();
  });

  const handleAddUser = () => {
    if (user.trim() !== "") {
      setUsersList([...usersList, user]);
      setLoggedUser(user);
      setUser("");
    }

    const newUser = {
      user: user,
    };

    fetch("https://chat-back-three.vercel.app/api/user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());

    setUser("");
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        usersList,
        setUsersList,
        user,
        setUser,
        handleAddUser,
      }}
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
