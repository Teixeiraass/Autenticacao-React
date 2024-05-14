import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
    children: ReactNode,
    className: string
}

const Card = ({children, className}: CardProps) => {
    return (
        <div className={twMerge("rounded-xl border bg-card text-card-foreground shadow min-w-[300px] min-h-[200px] flex flex-col", className)}>
            {children}
        </div>
    )
}

export default Card;