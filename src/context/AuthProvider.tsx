import { PropsWithChildren, createContext, useContext } from "react";
import api from "../service/Api";
import { Navigate } from "react-router-dom";
import { UserInterface } from "../components/interface/UserInterface";
import { AvatarItensProps } from "../components/interface/AvatarInterface";
import { AxiosError } from "axios";

interface AuthContextProps {
    handleLogin: (email: string, password: string) => Promise<void>;
    handleLogout: () => void;
    getUser: () => Promise<UserInterface> | AvatarItensProps | void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post("/auth/login/", { email, password })
            localStorage.setItem("accessToken", response.data.tokens.access);
        } catch (error: unknown) {
            if (error instanceof AxiosError && error.response) {
                throw new Error(error.response.data.detail);
            } else {
                throw new Error('An unexpected error occurred');
            }
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
            return null;
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