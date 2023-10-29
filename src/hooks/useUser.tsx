import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";

type ChildrenProvider = {
  children: React.ReactNode;
};

interface usersProps {
  user: string;
  _id: string;
}

interface UserContext {
  loggedUser: string | null;
  setLoggedUser: (user: string | null) => void;
  usersList: usersProps[];
  setUsersList: Dispatch<SetStateAction<usersProps[]>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  handleAddUser: () => void;
  handleLogout:() => void
}

export const UserContext = React.createContext<UserContext>({
  loggedUser: null,
  setLoggedUser: () => {},
  usersList: [],
  setUsersList: () => {},
  user: "",
  setUser: () => {},
  handleAddUser: () => {},
  handleLogout: () => {}
});

export const UserProvider = ({ children }: ChildrenProvider) => {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<usersProps[]>([]);
  const [user, setUser] = useState("");
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        loadUsers();
      }, 1000);
    }
    loadUsers();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const loadUsers = () => {
    fetch("https://chat-back-three.vercel.app/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsersList(data);
      });
  };

  useEffect(() => {
    loadUsers();
  }, [user, loggedUser]);

  const handleAddUser = () => {
    if (user.trim() === "") return;

    const newUser = {
      user: user,
      id: uuidv4(),
    };

    fetch("https://chat-back-three.vercel.app/api/user", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => response.json());
    setLoggedUser(user);
    setUser("");
  };

  const handleLogout = () => {
    setLoggedUser("")
  }

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
        handleLogout
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
