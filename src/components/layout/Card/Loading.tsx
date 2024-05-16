import { ReactNode } from "react";

interface LoadingProps {
    loading: boolean,
    children: ReactNode
}

const Loading = ({ loading, children }: LoadingProps) => {
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <h1>Loading...</h1>
                <p>We are working for a better experience</p>
            </div>
        )
    } else {
        return children
    }
}

export default Loading;