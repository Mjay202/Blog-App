import { createContext, useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


}