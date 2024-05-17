import { ChangeEvent, useState } from "react";
import Card from "../components/layout/Card/Card";
import { Login } from "../components/template/login/Index";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginFailed from "../components/template/login/LoginFailed";
import Logo from '../assets/B2Bit Logo.png'

const LoginPage = () => {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const { handleLogin } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try{
            await handleLogin(email, password)
            navigate("/")
        }catch(error: any){
            if(email == "" || password == ""){
                setError("Os campos não podem estar em branco")
                return
            }
            setError(error.message)
        }
    }

    function handleEmail(e: ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }

    function handlePassword(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }

    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <Card className="items-center gap-5 p-10 w-[480px] h-[534px]">
                <Login.Icon icon={Logo}/>
                <Login.Input value={email} label="Email" type="email" required placeholder="@gmail.com" onChange={e => handleEmail(e)}/>
                <Login.Input value={password} label="Password" type="password" required placeholder="**********" onChange={e => handlePassword(e)}/>
                {error && <LoginFailed>{error}</LoginFailed>}
                <Button className="w-full h-[54px]" label="Sing in" onClick={handleSubmit}/>
            </Card>
        </div>
    )
}

export default LoginPage;