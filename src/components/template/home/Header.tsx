import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps{
    children: ReactNode,
    className?: string
}

const Header = ({children, className}: HeaderProps) => {
    return( 
        <div className={twMerge("h-full bg-white w-screen p-5", className)}>
            {children}
        </div>
    )
}

export default Header;