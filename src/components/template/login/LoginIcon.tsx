import { ElementType } from "react"

interface LoginIconProps {
    icon: ElementType,
}

const LoginIcon = ({icon: Icon}: LoginIconProps) => {
    return(
        <Icon />
    )
}

export default LoginIcon;