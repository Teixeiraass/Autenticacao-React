interface LoginIconProps {
    icon: string,
}

const LoginIcon = ({icon}: LoginIconProps) => {
    return(
        <img src={icon} alt="Logo" />
    )
}

export default LoginIcon;