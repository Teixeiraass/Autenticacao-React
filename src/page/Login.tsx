import { ChangeEvent, useState } from "react";
import Card from "../components/layout/Card/Card";
import { Login } from "../components/template/login/Index";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginFailed from "../components/template/login/LoginFailed";

const LoginPage = () => {
    const { handleLogin } = useAuth();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            if (email === "" || password === "") {
                return setError("Os campos não podem estar em branco")
            } else {
                await handleLogin(email, password)
                navigate("/")
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                return setError(error.message);
            }
        }
    }

    function handleEmail(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handlePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Card className="items-center gap-5 p-10 w-[480px] h-[534px]">
                <Login.Icon />
                <Login.Input value={email} label="Email" type="email" placeholder="@gmail.com" onChange={e => handleEmail(e)} />
                <Login.Input value={password} label="Password" type="password" placeholder="**********" onChange={e => handlePassword(e)} />
                {error && <LoginFailed>{error}</LoginFailed>}
                <Button className="w-full h-[54px]" label="Sing in" onClick={handleSubmit} />
            </Card>
        </div>
    )
}

export default LoginPage;