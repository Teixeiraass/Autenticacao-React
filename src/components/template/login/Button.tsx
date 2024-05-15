import { ButtonHTMLAttributes, ElementType } from "react"

interface LoginIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
}

const LoginButton = ({label, ...rest}: LoginIconProps) => {
    return(
        <button {...rest} className="bg-[#02274F] text-[#fff] w-full h-[54px] rounded-[9px] text-[20px]">{label}</button>
    )
}

export default LoginButton;