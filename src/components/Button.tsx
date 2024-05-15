import { ButtonHTMLAttributes} from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
}

const Button = ({label, ...rest}: ButtonProps) => {
    return(
        <button {...rest} className="bg-[#02274F] text-[#fff] w-full h-[54px] rounded-[9px] text-[20px]">{label}</button>
    )
}

export default Button;