import { InputHTMLAttributes } from "react"

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
}

const LoginInput = ({label, ...rest}: LoginInputProps) => {
    

    return(
        <div className="flex flex-col w-full gap-3">
            <label>{label}</label>
            <input className="bg-[#F1F1F1] h-[54px] rounded-[9px] pt-[18px] pb-[20px] px-[18px] text-[16px] outline-none" {...rest}/>
        </div>
    )
}

export default LoginInput;