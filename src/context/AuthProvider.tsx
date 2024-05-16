import { PropsWithChildren, createContext, useContext, useState } from "react";
import api from "../service/Api";

interface User {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: string | null;
    type: string;
    created: string;
    modified: string;
    role: string;
}

interface AuthContextProps {
    user: User | null;
    onLogin: (email: string, password: string) => Promise<void>;
    onLogout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post("/auth/login/", { email, password })
            setUser(response.data.user)
            localStorage.setItem("accessToken", response.data.tokens.access);
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("accessToken");
    }

    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
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