import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const Context = createContext();

function AuthProvider({ children }) {
  const router = useRouter();

  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName(window.localStorage.getItem("UserName"));
  }, []);

  function login(name) {
    localStorage.setItem("UserName", name);
    setUserName(name);
    router.push("/");
  }
  function logOut() {
    setUserName("");
  }

  return (
    <Context.Provider value={{ login, userName, logOut }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
