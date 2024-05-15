import { ReactNode } from "react";

interface HeaderProps{
    children: ReactNode
}

const Header = ({children}: HeaderProps) => {
    return( 
        <div className="h-full bg-white w-screen p-5">
            {children}
        </div>
    )
}

export default Header;