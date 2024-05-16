import { PropsWithChildren, createContext, useContext } from "react";
import api from "../service/Api";
import { Navigate } from "react-router-dom";
import { UserInterface } from "../components/interface/UserInterface";

interface AuthContextProps {
    handleLogin: (email: string, password: string) => Promise<void>;
    handleLogout: () => void;
    getUser: () => Promise<UserInterface> | void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post("/auth/login/", { email, password })
            localStorage.setItem("accessToken", response.data.tokens.access);
        } catch (error: any) {
            throw new Error(error.response.data.detail)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        <Navigate to={"/login"}/>
    }

    const getUser = async () => {
        try{
            const response = await api.get("/auth/profile")
            const user = response.data
            return user
        }catch(e) {
            console.log('erro')
        }
    } 

    return (
        <AuthContext.Provider value={{ getUser, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}