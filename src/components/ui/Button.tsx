import { ButtonHTMLAttributes} from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string,
    className?: string
}

const Button = ({label, className, ...rest}: ButtonProps) => {
    return(
        <button {...rest} className={twMerge("bg-[#02274F] text-[#fff] rounded-[9px] text-[20px]",className)}>{label}</button>
    )
}

export default Button;