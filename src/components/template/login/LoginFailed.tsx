import { PropsWithChildren } from "react";

const LoginFailed = ({children}: PropsWithChildren) => {
    return (
        <div className="w-full text-red-600 text-[18px]">
            {children}
        </div>
    )
}

export default LoginFailed;