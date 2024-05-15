import { useState } from "react";
import Logo from '../assets/B2Bit Logo.png'
import Card from "../components/layout/Card/Card";
import { Login } from "../components/template/login/Index";
import Button from "../components/Button";

const LoginPage = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <Card className="items-center gap-5 p-10 w-[480px] h-[534px]">
                <Login.Icon icon={Logo}/>
                <Login.Input value={email} label="Email" type="email" placeholder="@gmail.com" onChange={e => setEmail(e.target.value)}/>
                <Login.Input value={password} label="Password" type="password" placeholder="**********" onChange={e => setPassword(e.target.value)}/>
                <Button label="Sing in"/>
            </Card>
        </div>
    )
}

export default LoginPage;